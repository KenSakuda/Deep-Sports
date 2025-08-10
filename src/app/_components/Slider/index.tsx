// "use client";
// import { useState, useEffect } from "react";
// import styles from "./index.module.css";
// import { Article } from "@/app/_libs/microcms";
// import Image from "next/image";
// import Link from "next/link";
// type Props = {
//   articles: Article[];
// };
// export default function Slider({ articles }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progressIndex, setProgressIndex] = useState(0);
//   const intervalTime = 5000; // 各プログレスバーが進む時間（5秒）
//   const steps = 5; // プログレスバーの本数（= 記事数と連動）
//   useEffect(() => {
//     if (articles.length === 0) return;
//     const progressInterval = setInterval(() => {
//       setProgressIndex((prev) => (prev + 1) % steps);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
//     }, intervalTime);
//     return () => clearInterval(progressInterval);
//   }, [articles]);
//   return (
//     <div className={styles.sliderContainer}>
//       {/* 左ボタン */}
//       <button
//         className={styles.prevButton}
//         onClick={() => {
//           setProgressIndex((prev) => (prev - 1 + steps) % steps);
//           setCurrentIndex(
//             (prev) => (prev - 1 + articles.length) % articles.length
//           );
//         }}
//       >
//         <Image src="/left-arrow.svg" alt="Previous" width={40} height={40} />
//       </button>
//       {/* スライドコンテンツ */}
//       <div className={styles.sliderContent}>
//         {articles.length > 0 && (
//           <Link
//             href={`/articles/${articles[currentIndex].id}`}
//             className={styles.link}
//           >
//             <div className={styles.imageContainer}>
//               <Image
//                 src={articles[currentIndex].thumbnail.url}
//                 alt={articles[currentIndex].title}
//                 width={950}
//                 height={500}
//                 className={styles.sliderImage}
//               />
//               <div className={styles.overlay}>
//                 <span className={styles.pickupText}>PICK UP</span>
//                 <h2 className={styles.title}>{articles[currentIndex].title}</h2>
//               </div>
//             </div>
//           </Link>
//         )}
//         {/* プログレスバー（画像の下部に配置） */}
//         <div className={styles.progressBar}>
//           {[...Array(steps)].map((_, index) => (
//             <div
//               key={index}
//               className={`${styles.progressSegment} ${
//                 index <= progressIndex ? styles.active : ""
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//       {/* 右ボタン */}
//       <button
//         className={styles.nextButton}
//         onClick={() => {
//           setProgressIndex((prev) => (prev + 1) % steps);
//           setCurrentIndex((prev) => (prev + 1) % articles.length);
//         }}
//       >
//         <Image src="/right-arrow.svg" alt="Next" width={40} height={40} />
//       </button>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import styles from "./index.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import type { Article } from "@/app/_libs/microcms";

// type Props = {
//   articles: Article[];
//   interval?: number; // ms（デフォルト 5000）
// };

// export default function Slider({ articles, interval = 5000 }: Props) {
//   const [current, setCurrent] = useState(0);
//   const [playing, setPlaying] = useState(true);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const touchStartX = useRef<number | null>(null);
//   const touchDeltaX = useRef(0);

//   const length = articles.length;

//   const goTo = useCallback(
//     (idx: number) => {
//       if (length === 0) return;
//       setCurrent((idx + length) % length);
//     },
//     [length]
//   );

//   const next = useCallback(() => goTo(current + 1), [current, goTo]);
//   const prev = useCallback(() => goTo(current - 1), [current, goTo]);

//   // autoplay
//   useEffect(() => {
//     if (!playing || length <= 1) return;
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//     timerRef.current = setInterval(next, interval);
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [playing, interval, next, length]);

//   // pause on visibility change (タブ切替対策)
//   useEffect(() => {
//     const onVis = () => setPlaying(document.visibilityState === "visible");
//     document.addEventListener("visibilitychange", onVis);
//     return () => document.removeEventListener("visibilitychange", onVis);
//   }, []);

//   // keyboard
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [next, prev]);

//   if (length === 0) return null;

//   // swipe handlers
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchDeltaX.current = 0;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     if (touchStartX.current == null) return;
//     touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
//   };
//   const onTouchEnd = () => {
//     const dx = touchDeltaX.current;
//     touchStartX.current = null;
//     touchDeltaX.current = 0;
//     const SWIPE = 40;
//     if (dx > SWIPE) prev();
//     else if (dx < -SWIPE) next();
//   };

//   const active = articles[current];

//   return (
//     <section
//       className={styles.slider}
//       onMouseEnter={() => setPlaying(false)}
//       onMouseLeave={() => setPlaying(true)}
//       onTouchStart={onTouchStart}
//       onTouchMove={onTouchMove}
//       onTouchEnd={onTouchEnd}
//       aria-roledescription="carousel"
//     >
//       {/* 画像エリア（PC/スマホ共通） */}
//       <div className={styles.stage}>
//         <button
//           className={`${styles.nav} ${styles.prev}`}
//           aria-label="前へ"
//           onClick={prev}
//         />
//         <button
//           className={`${styles.nav} ${styles.next}`}
//           aria-label="次へ"
//           onClick={next}
//         />

//         <Link href={`/articles/${active.id}`} className={styles.stageLink}>
//           <Image
//             src={active.thumbnail.url}
//             alt={active.title}
//             fill
//             sizes="100vw"
//             priority
//             className={styles.image}
//           />

//           {/* PICK UP バッジ（PC/スマホ） */}
//           <span className={styles.badge}>PICK&nbsp;UP</span>

//           {/* モバイルの黒グラデ＋タイトル（PCでは非表示） */}
//           <div className={styles.mobileOverlay}>
//             <p className={styles.mobileTitle}>{active.title}</p>
//           </div>
//         </Link>

//         {/* ドット（PC/スマホ） */}
//         <div className={styles.dots} role="tablist" aria-label="スライド切替">
//           {articles.map((_, i) => (
//             <button
//               key={i}
//               role="tab"
//               aria-selected={i === current}
//               aria-label={`スライド ${i + 1}`}
//               className={`${styles.dot} ${
//                 i === current ? styles.dotActive : ""
//               }`}
//               onClick={() => goTo(i)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* PC用：下の淡色キャプション帯 */}
//       <div className={styles.captionBar}>
//         <button
//           className={`${styles.arrowBtn} ${styles.arrowLeft}`}
//           onClick={prev}
//           aria-label="前へ"
//         />
//         <div className={styles.captionInner}>
//           <div className={styles.captionMeta}>STORIES</div>
//           <Link href={`/articles/${active.id}`} className={styles.captionTitle}>
//             {active.title}
//           </Link>
//         </div>
//         <button
//           className={`${styles.arrowBtn} ${styles.arrowRight}`}
//           onClick={next}
//           aria-label="次へ"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/app/_libs/microcms";

type Props = {
  articles: Article[];
  interval?: number; // ms（デフォルト 5000）
};

export default function Slider({ articles, interval = 5000 }: Props) {
  // 最初の5本のArticlesのみを使用
  const sliderArticles = articles.slice(0, 5);

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const length = sliderArticles.length;

  const goTo = useCallback(
    (idx: number) => {
      if (length === 0) return;
      setCurrent((idx + length) % length);
    },
    [length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // autoplay
  useEffect(() => {
    if (!playing || length <= 1) return;
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(next, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, interval, next, length]);

  // pause on visibility change (タブ切替対策)
  useEffect(() => {
    const onVis = () => setPlaying(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (length === 0) return null;

  // swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const dx = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    const SWIPE = 40;
    if (dx > SWIPE) prev();
    else if (dx < -SWIPE) next();
  };

  const active = sliderArticles[current];

  return (
    <section
      className={styles.slider}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* 画像エリア（PC/スマホ共通） */}
      <div className={styles.stage}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          aria-label="前へ"
          onClick={prev}
        />
        <button
          className={`${styles.nav} ${styles.next}`}
          aria-label="次へ"
          onClick={next}
        />

        <Link href={`/articles/${active.id}`} className={styles.stageLink}>
          <Image
            src={active.thumbnail.url}
            alt={active.title}
            fill
            sizes="100vw"
            priority
            className={styles.image}
          />

          {/* PICK UP バッジ（PC/スマホ） */}
          <span className={styles.badge}>PICK&nbsp;UP</span>

          {/* モバイルの黒グラデ＋タイトル（PCでは非表示） */}
          <div className={styles.mobileOverlay}>
            <p className={styles.mobileTitle}>{active.title}</p>
          </div>
        </Link>

        {/* ドット（PC/スマホ） */}
        <div className={styles.dots} role="tablist" aria-label="スライド切替">
          {sliderArticles.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`スライド ${i + 1}`}
              className={`${styles.dot} ${
                i === current ? styles.dotActive : ""
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* PC用：下の淡色キャプション帯 */}
      <div className={styles.captionBar}>
        <button
          className={`${styles.arrowBtn} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="前へ"
        />
        <div className={styles.captionInner}>
          <div className={styles.captionMeta}>STORIES</div>
          <Link href={`/articles/${active.id}`} className={styles.captionTitle}>
            {active.title}
          </Link>
        </div>
        <button
          className={`${styles.arrowBtn} ${styles.arrowRight}`}
          onClick={next}
          aria-label="次へ"
        />
      </div>
    </section>
  );
}
