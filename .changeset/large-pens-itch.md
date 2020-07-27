---
'@autoguru/overdrive': patch
---

StandardModal: Fixes the issue where a mouseup on the backdrop triggered the
requestClose callback. Despite the click originating on the modal itself. So now
the callback will not fire.
