
/**
 * 
 * @param items -> 
 * 
 *  [
 *    {
 *      section: document.getElementById('tablet'),
        toActive: document.getElementById('about-header'),
        class: 'a--active'
 *    }
 *  ]
 * 
 * @returns 
 * 
 * update(currentScrollPosition) -> Atualiza os botoes do header
 */

const activateItemsOnScroll = (items) => {
    const lastItem = (items, value) => {
        for (let i = 0; i < items.length; i++) {
            if (value < items[i]) {
                return i
            }
        }

        return items.length - 1
    }

    const disableAll = (items) => {
        for (const item of items) {
            item.toActive.classList.remove(item.class)
        }
    }

    const endItemsOffset = items.map(item => {
        const elementOffsetTop = item.section.offsetTop
        const elementHeight = item.section.getBoundingClientRect().height
        console.log(10 + (item.additionalPixels || 0))
        const elementOffsetBottom = elementOffsetTop + elementHeight + (item.additionalPixels || 0)
        console.log(elementOffsetBottom)
        return elementOffsetBottom
    })

    return function (currentScrollPosition = document.documentElement.scrollTop) {
        disableAll(items)
        const item = items[lastItem(endItemsOffset, currentScrollPosition)]
        item.toActive.classList.add(item.class)
    }
}
