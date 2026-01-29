import axios from "axios";
import TranslateEngine, { TranslateOptions, TranslateResult } from "./base";
import { Config } from "~/core";

export default class OpenAITranslate extends TranslateEngine {
  apiRoot = "https://api.openai.com";
  systemPrompt = "You are a professional translation engine. Only output the translated text directly, without any explanation, arrow, original text, or additional formatting.";

  async translate(options: TranslateOptions) {
    let apiKey = Config.openaiApiKey;
    let apiRoot = this.apiRoot;
    if (Config.openaiApiRoot) apiRoot = Config.openaiApiRoot.replace(/\/$/, "");
    let model = Config.openaiApiModel;

    const response = await axios.post(
      `${apiRoot}/v1/chat/completions`,
      {
        model,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
        messages: [
          {
            role: "system",
            content: this.systemPrompt,
          },
          {
            role: "user",
            content: this.generateUserPrompts(options),
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return this.transform(response, options);
  }

  transform(response: any, options: TranslateOptions): TranslateResult {
    const { text, from = "auto", to = "auto" } = options;

    const translatedText = response.data.choices[0].message.content?.trim();

    const r: TranslateResult = {
      text,
      to,
      from,
      response,
      result: translatedText ? [translatedText] : undefined,
      linkToResult: "",
    };


    return r;
  }

  generateUserPrompts(options: TranslateOptions): string {
    const sourceLang = options.from;
    const targetLang = options.to;

    let generatedUserPrompt = `Translate the following text from ${sourceLang} to ${targetLang}. Only return the translated text, nothing else:\n\n${options.text}`;

    return generatedUserPrompt;
  }
}
