import React from 'react';
import { homepageData } from './data';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="site-header">
        <div className="logo">{homepageData.siteName}</div>
        <nav className="nav-menu">
          <a href="#hero">首頁</a>
          <a href="#about">關於我</a>
          <a href="#courses">實戰課程</a>
          <a href="#blog">日商知識庫</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="section-hero">
          <h1>{homepageData.hero.title}</h1>
          <p>{homepageData.hero.subtitle}</p>
          <button className="cta-button">{homepageData.hero.ctaText}</button>
        </section>

        <section id="pain-points" className="section-pain">
          <h2>{homepageData.painPoints.title}</h2>
          <ul>
            {homepageData.painPoints.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="about" className="section-about">
          <h2>{homepageData.about.title}</h2>
          <p>{homepageData.about.content}</p>
        </section>

<section id="courses" className="section-courses">
          <h2>{homepageData.courses.title}</h2>
          <div className="courses-card">
            <p>{homepageData.courses.content}</p>
            <button className="cta-button">{homepageData.courses.ctaText}</button>
          </div>
        </section>

        <section id="blog" className="section-blog">
          <h2>{homepageData.blog.title}</h2>
          <ul>
            {homepageData.blog.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>{homepageData.footer.email}</p>
        <p><a href={homepageData.footer.formLink} target="_blank" rel="noreferrer">企業內訓/一對一諮詢洽詢表單</a></p>
        <p>{homepageData.footer.copyright}</p>
      </footer>
    </div>
  );
}

export default App;