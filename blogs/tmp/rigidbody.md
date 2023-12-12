## この記事について
unityの移動について書く記事の後編です。
前編→

## 移動方法の一覧
ここからは具体的な移動方法について、私が試せている範囲で細かく解説していきます。

参考：
- 一覧としてよくまとめられているページ様→
https://soft-rime.com/post-12117/
- transform・rigidbodyの移動について分かりやすく検証されているページ様→
https://tat1kun.hatenablog.com/entry/consideration-2022-02-27

### transform
- transform.position
    - 位置をワープ的に変更する
- transform.Translate
    - transform.positionを加算する

直接座標をいじる方法。前述したとおり壁を貫通したり、複雑な速度変化などは苦手だが、一番直感的でわかりやすい。<br>
高速のオブジェクトの登場しないゲームやデモ、シミュレーションゲームのマス目移動であれば余裕で使える。

### rigidbody
- velocity
    - 速度を設定
    - 貫通しない
    - 公式非推奨
- AddForce
    - velocityを加算する(translateのvelocity版)
    - 公式推奨
- position
    - 判定を考慮した描画がなされる
    - 貫通はする
    - 摩擦などは考慮されない
    - 参考:https://qiita.com/soutarouzaurusu/items/ea32ed6338f9d1004d42
- MovePosition
    - IsKinematic時に周囲に影響を与えるposition。IsKinematicを付けていないとpositionと同じ挙動。
    - 参考:https://yowabi.blogspot.com/2017/12/unity-positionmoveposition-rigidbody.html

velocityを設定すると、貫通することなく摩擦・時間などを考慮して速度に合わせて移動してくれる。描画においては貫通しないが、処理だけを見ると貫通してから戻る感じになってるため注意。

position移動方法自体はワープだが描画時に貫通しないというもの。movePositionは自分が物理の影響を受けない設定の時に相手に物理の影響を与える設定...むつかしい...

### CharactorController
- move
    - 移動を加算する
