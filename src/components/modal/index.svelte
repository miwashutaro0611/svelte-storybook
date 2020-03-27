<div class="text">テキスト</div>
<button type='button' on:click={modalOpen}>モーダル開く</button>
{#if modal}
<div class="p-modal">
  <div class="p-modal__overlay" on:click={modalClose}></div>
  <div class='p-modal__content'>
    <p>テキスト</p>
    <button type='button'>モーダル内のボタン</button>
    <button class='p-modal__close' type='button' on:click={modalClose}></button>
  </div>
</div>
{/if}

<style>
.p-modal {
  display: block;
  opacity: 1;
  transition: opacity .3s ease;
}

/* .p-modal.is-hide {
  pointer-events: none;
  opacity: 0;
} */

.p-modal__overlay {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: .5;
}

.p-modal__content {
  position: absolute;
  width: 300px;
  height: 200px;
  background: #fff;
  top: calc(50% - (200px / 2));
  left: calc(50% - (300px / 2));
}

.p-modal__close {
  display: block;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1c1c1c;
}
</style>

<script>
export let modal = true

const modalOpen = () => {
  modal = true
}

const modalClose = () => {
  modal = false
}

const CtrlFnckey = e => {
  if(event.keyCode == 27) {
  }
}

document.onkeydown = CtrlFnckey;
</script>