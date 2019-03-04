# Tokens contract

1. All tokens must be consumed via a css variable. You may choose to expose a scss function to help with this, but the underlying value must be a css varaible.

    eg:

    ```scss
    :root {
    	--global--color-red: red;
    }

    @function getColour($clr) {
    	@return var(--global--color-#{$clr});
    }

    .thing {
    	color: getColour('red');
    }
    ```

2. All tokens must proceed with `--global`.

3. All tokens must be wrapped in a mixin, so they can be rendered later. As the import of the file, must not produce any css.

    eg:

    ```scss
    // BAD
    :root {
    	--global--color-red: red;
    }

    // GOOD
    @mixin generateColors() {
    	:root {
    		--global--color-red: red;
    	}
    }
    ```
