import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string) {
    const { probId, code, lang } = JSON.parse(submission);

}