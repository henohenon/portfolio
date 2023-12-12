
## 移動方法の一覧
ここからは具体的な移動方法について、私が試せている範囲で細かく解説していきます。

参考：一覧として最強のサイト様→
https://soft-rime.com/post-12117/

### transform
- transform.position
- transform.Translate

直接座標をいじる方法。前述したとおり壁を貫通したり、複雑な速度変化などは苦手だが、一番直感的でわかりやすい。<br>
高速のオブジェクトの登場しないゲームやデモ、シミュレーションゲームのマス目移動であれば余裕で使える。

### rigidbody
- velocity
- AddForce
- MovePosition

positionの代わりにvelocityを操作するのが