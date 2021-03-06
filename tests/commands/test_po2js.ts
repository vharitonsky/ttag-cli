import * as path from "path";
import { execSync } from "child_process";

const poPath = path.resolve(__dirname, "../fixtures/po2jsTest/po2js.po");

test("convert po to js", () => {
    const result = execSync(`ts-node src/index.ts po2js ${poPath}`).toString();
    expect(result).toMatchSnapshot();
});

test("convert po to js pretty", () => {
    const result = execSync(
        `ts-node src/index.ts po2js -p ${poPath}`
    ).toString();
    expect(result).toMatchSnapshot();
});

test("convert po to js nostrip", () => {
    const result = execSync(
        `ts-node src/index.ts po2js -n ${poPath}`
    ).toString();
    expect(result).toMatchSnapshot();
});
