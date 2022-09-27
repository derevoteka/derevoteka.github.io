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
      "ae7aca12b1acfa5fb74acc5e4bc2728a6f1d03bebee14893fdce1297315261b304528b39d720e6764028d8dcb3a25e314f5a789120e1f0f15964827f65b5c016404759fa0c38d0f55be29b56c2fc3e7e6aa55474c085abf272dd133a2b85d1f9a8d980d0344221-6decf94a0cf137ad6bc5e90f376e9fb5",
    modelViewUrl: "https://sdeuc1.eu-central-1.shapediver.com",
    id: "mySession"
  });
})();
