export const logFileName = (): void => {
    console.log(`\n### INFO: current file is: ${import.meta.url}\n`);
}

logFileName();