const hs = {
  switchTheme: (() => $(`html`).toggleClass(`hs-dark`)),
  switchMenu: (() => {
    $(`.hs-menu`).toggleClass(`hs-menu-open`)
    if ($(`.hs-menu`).hasClass(`hs-menu-open`)) {
      $(`.hs-fixednav`).css('top', $(`.hs-menu`).height())
      $(`.hs-menu`).css('top', '0')
    } else {
      $(`.hs-fixednav`).css('top', '0')
      $(`.hs-menu`).css('top', -$(`.hs-menu`).height())
    }
  }),
};

$(`.hs-menu`).css('top', -$(`.hs-menu`).height());