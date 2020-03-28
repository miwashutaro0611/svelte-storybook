<h2>通常時</h2>
<button type='button' class='c-button is-base'>ボタン</button>
<h2>状態一覧</h2>
<div class='flexbox'>
  <button type='button' class='c-button'>ボタン(default)</button>
  <button type='button' class='c-button is-hover'>ボタン(hover)</button>
  <button type='button' class='c-button' disabled>ボタン(disabled)</button>
</div>

<style>
.c-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  color: #fff;
  background: #00c;
  border: 2px solid #00f;
  cursor: pointer;
  transition: .3s;
}

.c-button.is-base:hover {
  opacity: 0.7;
}

.c-button.is-hover {
  opacity: 0.7;
}

.c-button:disabled {
  background: #aaa;
  border-color: #999;
  pointer-events: none;
}

.c-button + .c-button {
  margin-left: 10px;
}

.flexbox {
  display: flex;
}
</style>

<script></script>