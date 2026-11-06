const cases = [
  {
    number: "FILE 001",
    category: "미해결 사건",
    title: "디아틀로프 고개에서 사라진 아홉 명",
    description:
      "1959년, 우랄산맥의 눈보라 속에서 발견된 텐트와 설명되지 않는 흔적들.",
    year: "1959",
    location: "URAL, RUSSIA",
    tone: "rust",
  },
  {
    number: "FILE 002",
    category: "미지의 신호",
    title: "72초 동안 우주에서 날아온 Wow! 신호",
    description:
      "한 번만 포착된 강력한 전파 신호. 그 발신지는 아직 확인되지 않았다.",
    year: "1977",
    location: "OHIO, USA",
    tone: "gold",
  },
  {
    number: "FILE 003",
    category: "잃어버린 장소",
    title: "지도에서 지워진 도시, 로아노크",
    description:
      "정착민 전원이 흔적 없이 사라진 식민지와 나무에 남겨진 단 하나의 단어.",
    year: "1590",
    location: "NORTH CAROLINA",
    tone: "ink",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tery's Stroy 홈">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-question">?</span>
          </span>
          <span className="brand-copy">
            <strong>Tery&apos;s Stroy</strong>
            <small>THE UNEXPLAINED, FILED.</small>
          </span>
        </a>

        <nav aria-label="주요 메뉴">
          <a href="#featured">이번 주 사건</a>
          <a href="#archive">전체 기록</a>
          <a href="#project">프로젝트 소개</a>
        </nav>

        <a className="submit-link" href="#project">
          제보하기 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> CASE FILES / VOL. 01</p>
          <h1>
            세상의 미스터리를
            <br />한 장씩 넘기다.
          </h1>
          <p className="hero-description">
            설명되지 않은 사건, 잊힌 장소, 풀리지 않은 기록을 모읍니다.
            <br className="desktop-break" /> 사실과 단서를 따라 당신만의 결론에 도달해 보세요.
          </p>

          <form className="search" action="#archive">
            <label className="sr-only" htmlFor="case-search">기록 검색</label>
            <span aria-hidden="true" className="search-icon" />
            <input id="case-search" name="q" placeholder="사건, 장소, 인물을 검색하세요" />
            <button type="submit">기록 찾기</button>
          </form>

          <div className="archive-stats" aria-label="아카이브 현황">
            <div><strong>128</strong><span>수집된 기록</span></div>
            <div><strong>34</strong><span>미해결 사건</span></div>
            <div><strong>12</strong><span>새로운 단서</span></div>
          </div>
        </div>

        <div className="hero-dossier" aria-label="대표 사건 파일 장식">
          <div className="dossier-tab">CONFIDENTIAL</div>
          <div className="dossier-paper">
            <div className="dossier-topline">
              <span>CASE NO. 24-071</span>
              <span>STATUS: OPEN</span>
            </div>
            <div className="dossier-title">THE UNKNOWN</div>
            <div className="evidence-board" aria-hidden="true">
              <span className="evidence-point point-one" />
              <span className="evidence-point point-two" />
              <span className="evidence-point point-three" />
              <span className="evidence-line line-one" />
              <span className="evidence-line line-two" />
              <span className="evidence-ring">?</span>
            </div>
            <div className="dossier-notes">
              <span>ORIGIN / UNVERIFIED</span>
              <span>LAST UPDATED / 06 NOV 2026</span>
            </div>
          </div>
          <span className="paperclip" aria-hidden="true" />
        </div>
      </section>

      <section className="featured" id="featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> LATEST DISCOVERIES</p>
            <h2>최근 공개된 기록</h2>
          </div>
          <a href="#archive">모든 기록 보기 <span aria-hidden="true">→</span></a>
        </div>

        <div className="case-grid" id="archive">
          {cases.map((item) => (
            <article className="case-card" key={item.number}>
              <div className={`case-visual ${item.tone}`}>
                <span className="case-number">{item.number}</span>
                <span className="case-stamp">FICTIONAL SAMPLE</span>
                <span className="case-glyph" aria-hidden="true">?</span>
                <div className="case-coordinates">
                  <span>{item.year}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="case-content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                <p className="case-description">{item.description}</p>
                <a href="#top" aria-label={`${item.title} 기록 읽기`}>
                  기록 열람 <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project-overview" id="project">
        <div className="project-heading">
          <p className="eyebrow"><span /> ABOUT THE PROJECT</p>
          <h2>미스터리를 읽고, 분류하고,<br />함께 추리하는 디지털 서재.</h2>
        </div>

        <div className="project-copy">
          <p className="project-lead">
            Tery&apos;s Stroy는 세상에 흩어진 기묘한 이야기와 미해결 기록을
            한곳에서 탐색할 수 있도록 만든 미스터리 스토리 아카이브입니다.
          </p>
          <p>
            사건의 시간·장소·핵심 단서를 기록물처럼 정리하고, 독자가 단서를
            따라가며 자신만의 결론을 만들어 갈 수 있는 읽기 경험을 목표로 합니다.
            현재는 아카이브의 정보 구조와 시각 언어를 검증하는 첫 번째 버전입니다.
          </p>
        </div>

        <div className="project-features">
          <article>
            <span>01</span>
            <h3>기록의 수집과 분류</h3>
            <p>사건, 장소, 시대와 유형을 기준으로 미스터리 이야기를 체계적으로 정리합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>단서 중심의 탐색</h3>
            <p>파일과 증거 보드를 모티프로 삼아 핵심 단서가 자연스럽게 눈에 들어오도록 설계했습니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>확장 가능한 아카이브</h3>
            <p>새로운 이야기와 카테고리를 지속해서 더할 수 있는 편집 가능한 구조를 지향합니다.</p>
          </article>
        </div>

        <p className="sample-notice">
          <strong>CONTENT NOTE</strong>
          현재 표시된 사건 기록은 인터페이스 시연을 위해 구성한 픽션·샘플 콘텐츠입니다.
        </p>
      </section>

      <section className="about" id="about">
        <p>Every mystery leaves a trace.</p>
        <h2>진실은 언제나 기록 속에 남습니다.</h2>
        <a href="#top">Tery&apos;s Stroy 탐색하기 <span aria-hidden="true">↑</span></a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="mini-mark" aria-hidden="true">?</span>
          <strong>Tery&apos;s Stroy</strong>
        </div>
        <p>© 2026 Tery&apos;s Stroy. Curiosity never ends.</p>
      </footer>
    </main>
  );
}
