const questions = [
  {
    text: "知り合いを少人数に限定する傾向がありますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "行動を計画するよりも、すぐに行動する方が好きですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "あなたに向けられた発言にすぐに返答できますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "実現不可能なことを夢見ることがよくありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "子供の頃、言われたことを文句も言わずすぐにやりましたか？",
    trait: "L",
    key: "Yes",
  },
  {
    text: "あなたの行動は迅速で確信に満ちていますか？",
    trait: "E",
    key: "Yes",
  },
  { text: "新しい友達を作るのが苦手ですか？", trait: "E", key: "Yes" },
  {
    text: "今日やるべきことを明日に延ばすことがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "仕事を気楽に構える方ですか？", trait: "E", key: "Yes" },
  { text: "不満を感じることがよくありますか？", trait: "N", key: "Yes" },
  {
    text: "過去について思い悩むことが多いですか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "約束したことは、どんなに不都合でも必ず守りますか？",
    trait: "L",
    key: "Yes",
  },
  { text: "人と社交的に交わるのが好きですか？", trait: "E", key: "Yes" },
  {
    text: "異性の前では恥ずかしがる傾向がありますか？",
    trait: "E",
    key: "Yes",
  },
  { text: "腹を立てることがありますか？", trait: "N", key: "Yes" },
  { text: "孤独を感じることがありますか？", trait: "N", key: "Yes" },
  {
    text: "様々なことに対して神経質になりやすいですか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "決断を下すのが遅れることが多いですか？",
    trait: "N",
    key: "Yes",
  },
  { text: "どんな偏見も持っていませんか？", trait: "L", key: "Yes" },
  {
    text: "あまりにも良心的すぎるところがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "社交の場で「人生最高の時」を過ごすことがありますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "理由もなく嬉しくなったり悲しくなったりすることがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "人にいたずらするのが好きですか？", trait: "E", key: "Yes" },
  { text: "下品な冗談で笑うことがありますか？", trait: "E", key: "Yes" },
  {
    text: "集中しようとしても気が散ることがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "緊張しやすい性格ですか？", trait: "N", key: "Yes" },
  {
    text: "重要な瞬間が過ぎてからやるべきだったことに気付くことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "ゲームで勝つことに強いこだわりがありますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "新しい知り合いを作るのが得意ですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "自分がいつもの自分でないと感じることがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "仕事を命がけのように取り組むことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "会話中でも物思いにふけることがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "嫌いな人が成功したときでも本当に嬉しく思いますか？",
    trait: "L",
    key: "Yes",
  },
  {
    text: "社会的活動から本当の満足感を得ますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "考えが頭に浮かびすぎて眠れなくなることがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "少し自慢することがありますか？", trait: "L", key: "Yes" },
  {
    text: "楽しいパーティーで完全に楽しめますか？",
    trait: "E",
    key: "Yes",
  },
  { text: "空想にふけるのが好きですか？", trait: "N", key: "Yes" },
  {
    text: "理由もなく疲れたり無気力になることがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "あなたの習慣は全て良いものですか？", trait: "L", key: "Yes" },
  {
    text: "社交の場では静かにしている方ですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "とても元気な時と非常に無気力な時がありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "手紙を読むとすぐに返事を書きますか？",
    trait: "L",
    key: "Yes",
  },
  { text: "おしゃべりな性格だと思いますか？", trait: "E", key: "Yes" },
  {
    text: "人に知られたくない考えやアイデアを持つことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "多くの人との交流ができないととても不幸になりますか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "迅速な行動が求められるプロジェクトに関わるのが好きですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "過去の楽しい思い出をよく思い返しますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "知らないことについて話すことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "役に立たない考えが繰り返し頭に浮かぶことがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "他人から活発な人だと思われますか？", trait: "E", key: "Yes" },
  { text: "時々噂話をすることがありますか？", trait: "L", key: "Yes" },
  { text: "気分は大体安定していますか？", trait: "N", key: "No" },
  { text: "感情が傷つきやすい方ですか？", trait: "N", key: "Yes" },
  { text: "嘘をついたことがありますか？", trait: "L", key: "Yes" },
  {
    text: "グループ活動ではリーダーを務める方が好きですか？",
    trait: "E",
    key: "Yes",
  },
  { text: "楽観的な性格だと思いますか？", trait: "E", key: "Yes" },
  {
    text: "お金のことで心配することがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "あまりにも落ち着かず椅子に座っていられないことがありますか？",
    trait: "N",
    key: "Yes",
  },
  { text: "社交的な性格だと思いますか？", trait: "E", key: "Yes" },
  { text: "あなたは元気な性格ですか？", trait: "E", key: "Yes" },
  {
    text: "約束や仕事に遅れたことがありますか？",
    trait: "L",
    key: "Yes",
  },
  {
    text: "理由もなく「惨めだ」と感じることがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "罪悪感に悩まされることが多いですか？",
    trait: "N",
    key: "Yes",
  },
  { text: "気分の浮き沈みが激しいですか？", trait: "N", key: "Yes" },
  {
    text: "社交の場にたくさん出席するのが好きですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "怒りで感情を爆発させたことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "理由もなく嬉しくなったり落ち込んだりしますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "楽しいパーティーでも自分を解放できないことがありますか？",
    trait: "E",
    key: "No",
  },
  { text: "普段は気楽な性格ですか？", trait: "E", key: "Yes" },
  {
    text: "理由があるなしにかかわらず気分が変動することがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "税関で見つからなくても全て申告しますか？",
    trait: "L",
    key: "Yes",
  },
  {
    text: "細かい作業を必要とする仕事が好きですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "一人になりたくて誰の相手もしたくない時がありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "社交の場では目立たないようにしていますか？",
    trait: "E",
    key: "Yes",
  },
  { text: "心配事で眠れないことがありますか？", trait: "N", key: "Yes" },
  { text: "嫌いな人がいますか？", trait: "L", key: "Yes" },
  {
    text: "失望を強く感じてなかなか忘れられないことがありますか？",
    trait: "N",
    key: "Yes",
  },
  {
    text: "新しい友達作りで先に声をかける方ですか？",
    trait: "E",
    key: "Yes",
  },
  {
    text: "集団での盛り上がりに参加するのが好きですか？",
    trait: "E",
    key: "Yes",
  },
];

const quizDiv = document.getElementById("quiz");

questions.forEach((q, index) => {
  const container = document.createElement("div");
  container.className = "question";
  container.innerHTML = `
        <p>質問${index + 1}: ${q.text}</p>
        <label><input type="radio" name="q${index}" value="Yes" required> はい</label>
        <label><input type="radio" name="q${index}" value="No"> いいえ</label>
        <label><input type="radio" name="q${index}" value="DK"> どちらでもない</label>
      `;
  quizDiv.appendChild(container);
});

let chartInstance = null;

document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let eScore = 0;
    let nScore = 0;
    let lScore = 0;

    questions.forEach((q, index) => {
      const val = document.querySelector(
        `input[name='q${index}']:checked`
      ).value;
      if (val === q.key) {
        if (q.trait === "E") eScore++;
        else if (q.trait === "N") nScore++;
        else if (q.trait === "L") lScore++;
      }
    });

    document.getElementById("results").innerHTML =
      `<p><strong>Eスコア（外向性）:</strong> ${eScore} / 48</p>` +
      `<p><strong>Nスコア（神経症傾向）:</strong> ${nScore} / 48</p>` +
      `<p><strong>Lスコア（虚偽尺度）:</strong> ${lScore} / 24</p>`;

    plotScores(eScore, nScore);
  });

function plotScores(e, n) {
  const ctx = document.getElementById("scoreChart").getContext("2d");
  document.getElementById("plotContainer").style.display = "block";

  if (chartInstance) {
    chartInstance.destroy();
  }

  const bgPlugin = {
    id: "customGridBackground",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const xStep = (chartArea.right - chartArea.left) / 3;
      const yStep = (chartArea.bottom - chartArea.top) / 3;

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          ctx.fillStyle = (row + col) % 2 === 0 ? "#ffffff" : "#ffe6e6";
          ctx.fillRect(
            chartArea.left + col * xStep,
            chartArea.top + row * yStep,
            xStep,
            yStep
          );
        }
      }
    },
  };

  chartInstance = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "入力されたスコア",
          data: [{ x: e, y: n }],
          backgroundColor: "red",
          pointRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          min: 0,
          max: 48,
          title: {
            display: true,
            text: "外向性（Eスコア）",
          },
          ticks: {
            stepSize: 8,
          },
          grid: {
            drawOnChartArea: true,
            color: "#ccc",
          },
        },
        y: {
          min: 0,
          max: 48,
          title: {
            display: true,
            text: "神経症傾向（Nスコア）",
          },
          ticks: {
            stepSize: 8,
          },
          grid: {
            drawOnChartArea: true,
            color: "#ccc",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
    plugins: [bgPlugin],
  });
}
