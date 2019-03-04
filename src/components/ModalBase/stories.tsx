import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { withModal } from '.';
import { Button, EButtonSize, EButtonVariant } from '../Button';

import styles from './stories.scss';

const NakedModal = withModal(({ children }) => (
	<div className={styles.root}>{children}</div>
));

storiesOf('Components|Modal', module)
	.add('withModal default', () => (
		<NakedModal
			isOpen={boolean('isOpen', true)}
			onRequestClose={action('onRequestClose')}>
			<p>Hello, I am a modal body!</p>
		</NakedModal>
	))
	.add('withModal triggered with a button', () => {
		const Example = () => {
			const [isOpen, setIsOpen] = useState(false);

			const onRequestClose = e => {
				action('onRequestClose')(e);
				setIsOpen(false);
			};

			return (
				<>
					<Button
						variant={EButtonVariant.Primary}
						children={'Click Me'}
						onClick={setIsOpen.bind(null, true)}
					/>
					<NakedModal isOpen={isOpen} onRequestClose={onRequestClose}>
						<p>Hello, I am a modal body!</p>
					</NakedModal>
				</>
			);
		};

		return <Example />;
	})
	.add('withModal close with internal button', () => {
		const Example = () => {
			const [isOpen, setIsOpen] = useState(false);

			return (
				<>
					<Button
						variant={EButtonVariant.Primary}
						children={'Click Me'}
						onClick={setIsOpen.bind(null, true)}
					/>
					<NakedModal isOpen={isOpen}>
						<p>Hello, I am a modal body!</p>
						<Button
							size={EButtonSize.Small}
							isFullWidth={true}
							onClick={setIsOpen.bind(null, false)}
							children={'Close Me'}
						/>
					</NakedModal>
				</>
			);
		};

		return <Example />;
	})
	.add('withModal with alot of body content', () => (
		<>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Fringilla phasellus faucibus scelerisque eleifend
					donec pretium. Justo nec ultrices dui sapien. Elementum
					sagittis vitae et leo duis ut diam quam nulla. Sit amet nisl
					suscipit adipiscing bibendum est ultricies integer. Egestas
					maecenas pharetra convallis posuere morbi. Viverra nibh cras
					pulvinar mattis nunc. Egestas maecenas pharetra convallis
					posuere morbi. Tortor pretium viverra suspendisse potenti
					nullam ac tortor. Eu non diam phasellus vestibulum. Feugiat
					pretium nibh ipsum consequat. Id eu nisl nunc mi ipsum.
				</p>

				<p>
					Ut diam quam nulla porttitor. Tempus egestas sed sed risus
					pretium quam vulputate. Lacus viverra vitae congue eu. Elit
					duis tristique sollicitudin nibh sit amet. Nisi lacus sed
					viverra tellus in hac habitasse. Quisque sagittis purus sit
					amet volutpat consequat mauris. Adipiscing diam donec
					adipiscing tristique. Nunc sed velit dignissim sodales ut
					eu. Tempus imperdiet nulla malesuada pellentesque elit eget.
					Luctus venenatis lectus magna fringilla. Ultricies mi eget
					mauris pharetra et ultrices neque ornare aenean. In aliquam
					sem fringilla ut. Libero nunc consequat interdum varius sit
					amet mattis vulputate enim. Egestas fringilla phasellus
					faucibus scelerisque. Eu lobortis elementum nibh tellus
					molestie nunc non blandit. Gravida quis blandit turpis
					cursus in hac habitasse platea.
				</p>

				<p>
					Ut tellus elementum sagittis vitae et leo duis ut diam.
					Morbi enim nunc faucibus a pellentesque. Duis convallis
					convallis tellus id interdum velit. Sed vulputate mi sit
					amet. Velit aliquet sagittis id consectetur purus ut
					faucibus pulvinar elementum. Tincidunt dui ut ornare lectus.
					Mattis aliquam faucibus purus in massa. Elit sed vulputate
					mi sit amet mauris. Sit amet nisl purus in mollis nunc sed
					id. Tellus cras adipiscing enim eu. Lacus vestibulum sed
					arcu non.
				</p>

				<p>
					Pharetra pharetra massa massa ultricies mi. Ac tincidunt
					vitae semper quis lectus. Ut tristique et egestas quis ipsum
					suspendisse ultrices gravida dictum. Est ante in nibh mauris
					cursus mattis molestie a iaculis. Commodo sed egestas
					egestas fringilla phasellus faucibus scelerisque eleifend.
					Faucibus purus in massa tempor nec feugiat nisl pretium
					fusce. Justo donec enim diam vulputate ut pharetra.
					Imperdiet massa tincidunt nunc pulvinar sapien et ligula.
					Lobortis scelerisque fermentum dui faucibus. Nisi est sit
					amet facilisis magna etiam tempor orci eu. Rhoncus dolor
					purus non enim praesent elementum. Odio facilisis mauris sit
					amet massa vitae.
				</p>

				<p>
					Ornare arcu odio ut sem nulla. Lectus urna duis convallis
					convallis tellus id interdum velit laoreet. Diam quam nulla
					porttitor massa. Nulla malesuada pellentesque elit eget
					gravida cum. Pellentesque diam volutpat commodo sed egestas
					egestas fringilla phasellus faucibus. At tellus at urna
					condimentum mattis pellentesque id nibh. Pharetra vel turpis
					nunc eget lorem dolor sed viverra ipsum. Mattis molestie a
					iaculis at erat pellentesque adipiscing commodo elit. Quam
					lacus suspendisse faucibus interdum posuere lorem ipsum
					dolor sit. Egestas pretium aenean pharetra magna ac.
					Volutpat odio facilisis mauris sit amet.
				</p>

				<p>
					Aliquet porttitor lacus luctus accumsan. Nunc scelerisque
					viverra mauris in aliquam sem fringilla ut. Feugiat nibh sed
					pulvinar proin gravida. Mattis ullamcorper velit sed
					ullamcorper morbi tincidunt ornare massa. Dolor sit amet
					consectetur adipiscing. Duis ultricies lacus sed turpis
					tincidunt id. Leo a diam sollicitudin tempor id eu nisl
					nunc. At risus viverra adipiscing at in tellus integer
					feugiat. Feugiat pretium nibh ipsum consequat nisl vel
					pretium lectus quam. Suscipit adipiscing bibendum est
					ultricies integer quis auctor elit sed. Nisi vitae suscipit
					tellus mauris a diam maecenas. Sollicitudin nibh sit amet
					commodo nulla. Bibendum arcu vitae elementum curabitur vitae
					nunc sed. Sed blandit libero volutpat sed cras ornare arcu
					dui. Nisi est sit amet facilisis magna etiam. Eget sit amet
					tellus cras adipiscing enim eu turpis. Velit egestas dui id
					ornare arcu odio ut sem. Aliquam sem fringilla ut morbi
					tincidunt augue interdum velit. Suscipit tellus mauris a
					diam maecenas.
				</p>

				<p>
					Aenean sed adipiscing diam donec adipiscing. Congue eu
					consequat ac felis donec. Id consectetur purus ut faucibus
					pulvinar elementum integer enim neque. Quam nulla porttitor
					massa id neque aliquam. Velit euismod in pellentesque massa.
					Donec ac odio tempor orci dapibus ultrices in iaculis nunc.
					Nunc aliquet bibendum enim facilisis gravida neque convallis
					a cras. At lectus urna duis convallis convallis tellus id
					interdum. Blandit massa enim nec dui nunc mattis enim.
					Aliquet risus feugiat in ante metus dictum at. Suspendisse
					potenti nullam ac tortor. Accumsan sit amet nulla facilisi.
					Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
					malesuada proin. Ut tristique et egestas quis ipsum
					suspendisse ultrices gravida dictum. Varius duis at
					consectetur lorem donec massa. Libero enim sed faucibus
					turpis in. Eget mauris pharetra et ultrices neque ornare
					aenean. Ipsum dolor sit amet consectetur adipiscing elit.
					Facilisis leo vel fringilla est ullamcorper eget nulla.
					Habitant morbi tristique senectus et netus et malesuada
					fames ac.
				</p>

				<p>
					At auctor urna nunc id cursus metus aliquam eleifend.
					Senectus et netus et malesuada fames. Tellus in metus
					vulputate eu scelerisque felis. Congue mauris rhoncus aenean
					vel elit scelerisque. Molestie nunc non blandit massa enim
					nec. Imperdiet dui accumsan sit amet. Et malesuada fames ac
					turpis egestas maecenas pharetra. Consequat id porta nibh
					venenatis cras sed felis eget. Turpis nunc eget lorem dolor
					sed viverra ipsum. Phasellus vestibulum lorem sed risus
					ultricies tristique nulla. Auctor urna nunc id cursus.
					Congue eu consequat ac felis donec et odio pellentesque.
					Volutpat diam ut venenatis tellus in metus vulputate eu
					scelerisque. Egestas egestas fringilla phasellus faucibus
					scelerisque eleifend donec pretium vulputate. Scelerisque
					fermentum dui faucibus in ornare quam viverra orci. In
					tellus integer feugiat scelerisque varius morbi enim.
					Natoque penatibus et magnis dis parturient montes nascetur
					ridiculus mus. At imperdiet dui accumsan sit amet nulla
					facilisi. Elit ullamcorper dignissim cras tincidunt. Vitae
					sapien pellentesque habitant morbi.
				</p>
			</div>
			<NakedModal
				isOpen={boolean('isOpen', true)}
				onRequestClose={action('onRequestClose')}>
				<p>Hello, I am a modal body!</p>
			</NakedModal>
		</>
	));
