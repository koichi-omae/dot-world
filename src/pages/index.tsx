import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const moveDown = (e: any) => {
    e.preventDefault();
    //idがcharacterの要素を取得
    const character = document.getElementById('character');

    //下方向への移動
    const moveDown = () => {
      //characterのtopの値を取得
      const characterTop = character?.offsetTop;
      //characterのtopの値を10増やす
      character?.style.setProperty('top', `${characterTop! + 20}px`);

      //boy1-frontの様相を取得
      const boy1Front = document.getElementById('character-child');
      if (boy1Front) {
        //boy1Frontにboy1-front-walking1が含まれているかどうかチェックする
        if (boy1Front.classList.contains('boy1-front-walking1')) {
          boy1Front.className = 'boy1-front-walking2';
        } else if (boy1Front.classList.contains('boy1-front-walking2')) {
          boy1Front.className = 'boy1-front-walking1';
        } else {
          boy1Front.className = 'boy1-front-walking1';
        }
      }
    };

    //マウスが押し続けている間、moveDownを実行
    const intervalId = setInterval(moveDown, 150);

    //マウスを離したらmoveDownを止める
    document.onmouseup = () => {
      clearInterval(intervalId);
      const boy1Front = document.getElementById('character-child');
      if (boy1Front) {
        boy1Front.className = 'boy1-front';
      }
    };
  };

  const moveUp = (e: any) => {
    e.preventDefault();
    //idがcharacterの要素を取得
    const character = document.getElementById('character');

    //下方向への移動
    const moveDown = () => {
      //characterのtopの値を取得
      const characterTop = character?.offsetTop;
      //characterのtopの値を10増やす
      character?.style.setProperty(
        'top',
        `${characterTop! >= 4 ? characterTop! - 20 : characterTop!}px`,
      );

      //boy1-frontの様相を取得
      const boy1Front = document.getElementById('character-child');

      //boy1FrontのclassNameの設定を全て削除
      if (boy1Front) {
        //boy1Frontにboy1-front-walking1が含まれているかどうかチェックする
        if (boy1Front.classList.contains('boy1-back-walking1')) {
          boy1Front.classList.remove('boy1-back-walking1');
          boy1Front.classList.add('boy1-back-walking2');
        } else if (boy1Front.classList.contains('boy1-back-walking2')) {
          boy1Front.classList.remove('boy1-back-walking2');
          boy1Front.classList.add('boy1-back-walking1');
        } else {
          boy1Front.classList.add('boy1-back-walking1');
        }
      }
    };

    //マウスが押し続けている間、moveDownを実行
    const intervalId = setInterval(moveDown, 150);

    //マウスを離したらmoveDownを止める
    document.onmouseup = () => {
      clearInterval(intervalId);
      const boy1Front = document.getElementById('character-child');
      if (boy1Front) {
        boy1Front.className = 'boy1-back';
      }
    };
  };

  const moveRight = (e: any) => {
    e.preventDefault();
    //idがcharacterの要素を取得
    const character = document.getElementById('character');

    //下方向への移動
    const moveDown = () => {
      //characterのtopの値を取得
      const characterLeft = character?.offsetLeft;
      //
      character?.style.setProperty('left', `${characterLeft! + 20}px`);

      //boy1-frontの様相を取得
      const boy1Right = document.getElementById('character-child');
      if (boy1Right) {
        if (boy1Right.classList.contains('boy1-right')) {
          boy1Right.className = 'boy1-right-walking1';
        } else {
          boy1Right.className = 'boy1-right';
        }
      }
    };

    //マウスが押し続けている間、moveDownを実行
    const intervalId = setInterval(moveDown, 150);

    //マウスを離したらmoveDownを止める
    document.onmouseup = () => {
      clearInterval(intervalId);
      const boy1Front = document.getElementById('character-child');
      if (boy1Front) {
        boy1Front.className = 'boy1-right';
      }
    };
  };

  const moveLeft = (e: any) => {
    e.preventDefault();
    //idがcharacterの要素を取得
    const character = document.getElementById('character');

    //下方向への移動
    const moveDown = () => {
      //characterのtopの値を取得
      const characterLeft = character?.offsetLeft;
      //characterのtopの値を10増やす
      character?.style.setProperty(
        'left',
        `${characterLeft! >= 4 ? characterLeft! - 20 : characterLeft}px`,
      );

      //boy1-frontの様相を取得
      const boy1Left = document.getElementById('character-child');
      if (boy1Left) {
        if (boy1Left.classList.contains('boy1-left')) {
          boy1Left.className = 'boy1-left-walking1';
        } else {
          boy1Left.className = 'boy1-left';
        }
      }
    };

    //マウスが押し続けている間、moveDownを実行
    const intervalId = setInterval(moveDown, 150);

    //マウスを離したらmoveDownを止める
    document.onmouseup = () => {
      clearInterval(intervalId);
      const boy1Front = document.getElementById('character-child');
      if (boy1Front) {
        boy1Front.className = 'boy1-left';
      }
    };
  };

  return (
    <div className='relative h-screen w-full overflow-auto bg-gray-100'>
      <div id='character' className='absolute '>
        <div id='character-child' className='boy1-front' />
      </div>
      <div className='absolute inset-x-0 bottom-12 mx-auto '>
        <div className='flex items-center justify-center gap-6'>
          <button
            className='h-8 w-8 rounded-full bg-blue-500 text-white'
            onMouseDown={(e) => moveRight(e)}
          >
            →
          </button>
          <button
            className='h-8 w-8 rounded-full bg-blue-500 text-white'
            onMouseDown={(e) => moveLeft(e)}
          >
            ←
          </button>
          <button
            className='h-8 w-8 rounded-full bg-blue-500 text-white'
            onMouseDown={(e) => moveUp(e)}
          >
            ↑
          </button>
          <button
            className='h-8 w-8 rounded-full bg-blue-500 text-white'
            onMouseDown={(e) => moveDown(e)}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
}
