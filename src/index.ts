// Notes on CodeSandBox
// if you don't see a preview when you load this page for the first time, reload the browser tab to the right

import { createViewport, createSession } from "@shapediver/viewer";

(async () => {
  // create a viewport
  const viewport = await createViewport({
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    id: "myViewport"
  });

  // create a session
  const session = await createSession({
    ticket:
      "3643dbd395e3024fb65c2f7b285e0143856897949ad748b0c42c2d36aae6904e2a09ef92c06da298888739d693b0ee7dd8481753a1dd8cbe554e3fcb831e066e69fbf7c35d5a61536c9b70b84017bc509d6c1d04bea2e379460c94169444951e905211caa13a76-18c97c4a7ad36b49f65c8972c96e8c1b",
    modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
    id: "mySession"
  });
})();
