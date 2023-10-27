(
  () => {
    const mediumPostUrlProperty = document.head.querySelector('meta[property="al:android:url"]')
    if ((mediumPostUrlProperty || {}).content && mediumPostUrlProperty.content.includes('medium://p/')) {
      window.location.href = 'https://freedium.cfd/' + window.location.href;
    }
  }
)();