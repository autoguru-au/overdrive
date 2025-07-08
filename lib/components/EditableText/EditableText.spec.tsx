import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { fn } from 'storybook/test';

import { EditableText } from './EditableText';

const HELLO_WORLD_TEXT = 'Hello World';

describe('<EditableText />', () => {
	it('should not throw', () =>
		expect(() => render(<EditableText />)).not.toThrow());

	it('should match snapshot for default bullet text', () => {
		expect(
			render(
				<EditableText
					type="text"
					colour="primary"
					value="Hello World!"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with custom size', () => {
		expect(
			render(<EditableText type="text" size="5" value="Hello World!" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot as date input', () => {
		expect(
			render(
				<EditableText
					type="date"
					colour="primary"
					value="Hello World!"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	describe('Interactive States', () => {
		it('should call event handlers when editing text input', async () => {
			const user = userEvent.setup();
			const onFocus = fn();
			const onBlur = fn();
			const onChange = fn();
			const onModeChange = fn();

			render(
				<EditableText
					type="text"
					value={HELLO_WORLD_TEXT}
					colour="muted"
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onChange}
					onModeChange={onModeChange}
				/>,
			);

			const editableText = screen.getByText(HELLO_WORLD_TEXT);

			// Click to enter edit mode (both onClick and onFocus are triggered)
			await user.click(editableText);
			expect(onFocus).toHaveBeenCalled();
			expect(onModeChange).toHaveBeenCalledWith('INPUT');

			// Find the input that appears
			const input = screen.getByDisplayValue(HELLO_WORLD_TEXT);
			expect(input).toBeInTheDocument();
			expect(input).toHaveFocus();

			// Type in the input (adding to existing text should trigger onChange)
			await user.type(input, ' Updated');
			expect(onChange).toHaveBeenCalled();

			// Press Enter to exit edit mode
			await user.keyboard('{Enter}');
			expect(onBlur).toHaveBeenCalledTimes(1);
			expect(onModeChange).toHaveBeenCalledWith('TEXT');
		});

		it('should call event handlers when editing number input and validate number format', async () => {
			const user = userEvent.setup();
			const onFocus = fn();
			const onBlur = fn();
			const onChange = fn();
			const onModeChange = fn();

			render(
				<EditableText
					type="number"
					value="20"
					colour="muted"
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onChange}
					onModeChange={onModeChange}
				/>,
			);

			const editableText = screen.getByText('20');

			// Click to enter edit mode
			await user.click(editableText);
			expect(onFocus).toHaveBeenCalled();
			expect(onModeChange).toHaveBeenCalledWith('INPUT');

			// Find the input that appears
			const input = screen.getByDisplayValue('20');
			expect(input).toBeInTheDocument();
			expect(input).toHaveFocus();

			// Add valid digits to trigger onChange
			await user.type(input, '5');
			expect(onChange).toHaveBeenCalled();

			// Try to type invalid characters (should be filtered out)
			const initialCallCount = onChange.mock.calls.length;
			await user.type(input, 'abc');
			// onChange should not be called for invalid characters
			expect(onChange).toHaveBeenCalledTimes(initialCallCount);

			// Press Escape to exit edit mode
			await user.keyboard('{Escape}');
			expect(onBlur).toHaveBeenCalledTimes(1);
			expect(onModeChange).toHaveBeenCalledWith('TEXT');
		});

		it('should revert to original value when input is cleared and mode changes', async () => {
			const user = userEvent.setup();
			const originalValue = 'Original Text';

			render(
				<EditableText
					type="text"
					value={originalValue}
					colour="muted"
				/>,
			);

			const editableText = screen.getByText(originalValue);

			// Click to enter edit mode
			await user.click(editableText);

			// Find the input and clear all content
			const input = screen.getByDisplayValue(originalValue);
			await user.clear(input);
			expect(input).toHaveValue('');

			// Press Enter to exit edit mode
			await user.keyboard('{Enter}');

			// Should revert to original value
			expect(screen.getByText(originalValue)).toBeInTheDocument();
		});
	});
});
