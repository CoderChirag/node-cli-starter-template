import { program } from "commander";

program.command("interactive", { hidden: true, isDefault: true }).action(() => {
  console.log("Hello user");
});

export function parse() {
  program.parse();
}
