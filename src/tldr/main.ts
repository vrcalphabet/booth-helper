import { generateContent } from './services/genai'

;(async () => {
  const apiKey = await BEM.getSetting<string>('apiKey')
  if (!apiKey) {
    alert('apiKey が設定されていません。')
    return
  }

  const res = await generateContent({
    apiKey,
    model: 'gemini-3.1-flash-lite-preview',
    content: `
お世話になっております。
先日、こちらのショップで「ねこパーカー」を購入させていただいた者なのですが、ちょっと、あまりにも挙動が不可解というか、こちらの想定を遥かに超えた動きをしていて、正直に申し上げてかなり困惑……というか、作業が全く進まずに今、非常に強い憤りを感じております。
もちろん、こちらの導入手順に不備がある可能性もミリ単位では考えましたが、私はこれまで何十着もVRChatの衣装を導入してきましたし、Modular Avatarも最新版、Unityのバージョンだって推奨されているものを使っています。それなのに、アップロードしてVRC側で確認してみると、腕を上げた瞬間に袖が虚空に吸い込まれたり、座った拍子にスカートが裏返って顔を貫通したりするんです。これ、テスト段階で気づかなかったのでしょうか？
私の設定が悪いのかと思って、さっきから3時間くらい、PhysBonesの値をいじったりボーンのウェイトを睨んだりしていますが、根本的に何かがおかしいとしか思えません。せっかくデザインに惹かれて、決して安くない金額を払って（応援の気持ちも込めてフルセット版を）買ったのに、こんな「動かすだけで壊れる」ような状態のまま販売されているのは、クリエイターとしてどうなんじゃ……いや、どうなのかと思わざるを得ません。
楽しみにしてた週末のイベントにもこれで行こうと思って、フレンドにも自慢してしまっていたのに、今のままではただの「ポリゴンの塊に襲われている不審者」です。修正パッチを出す予定はあるんですか？それとも、これは私の環境だけで起きている「仕様」だとでも仰るつもりでしょうか。もし解決策があるなら、確実に直る方法を教えてください。これ以上、Unityの再起動を繰り返すだけの無駄な時間を過ごしたくないので。
お忙しいところ恐縮ですが、納得のいく回答をお待ちしております。
    `.trim(),
    systemInstruction: `
Summarize the message into exactly three concise bullet points in Japanese from a third-person perspective. Do not include any additional text.
Structure the bullets as follows:
1. The problem or issue described in the message
2. The investigation, context, or actions taken by the sender
3. The request, question, or desired resolution
    `.trim(),
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 3,
      maxItems: 3,
    },
  })
  console.log(res)
})()
