<template>
  <div class="feeds">
    <div class="header">
      <div class="tabs">
        <div class="title">动态</div>
        <div
          class="tab"
          v-for="tab in tabs"
          :key="tab.type"
          @click="changeTab(tab)"
          :class="{active: currentTab === tab}"
        >
          <div class="tab-name">{{tab.name}}</div>
        </div>
      </div>
      <div class="grow"></div>
      <a
        class="online"
        target="_blank"
        href="https://www.bilibili.com/video/online.html"
      >在线列表</a>
      <div class="grow"></div>
      <div class="page">
        <div class="prev-page" @click="scroll(-1)">
          <icon type="extended" icon="left-arrow"></icon>
        </div>
        <div class="next-page" @click="scroll(1)">
          <icon type="extended" icon="right-arrow"></icon>
        </div>
      </div>
      <a class="more" href="//t.bilibili.com/" target="_blank">
        <icon type="home" icon="activity"></icon>全部动态
      </a>
    </div>
    <div class="contents edge-gradient" ref="contents" @scroll="checkScrollPosition" :class="{ 'is-bottom': isBottom }">
      <div class="card-wrapper" v-for="card in feedCards" :key="card.id">
        <video-card :data="card" orientation="vertical"></video-card>
      </div>
      <div class="empty" v-if="feedCards.length === 0">没有动态哦(´･_･`)</div>
    </div>
    <!-- <div class="video-feeds">
      <div class="sub-header">视频</div>
      <div class="contents">
        <div class="card-wrapper" v-for="card in videoFeeds" :key="card.id">
          <video-card :data="card" orientation="vertical"></video-card>
        </div>
      </div>
    </div>
    <div class="bangumi-feeds">
      <div class="sub-header">番剧</div>
      <div class="contents">
        <div class="card-wrapper" v-for="card in bangumiFeeds" :key="card.id">
          <video-card :data="card" orientation="vertical"></video-card>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script lang="ts">
interface Tab {
  name: string
  type: 'video' | 'bangumi'
  url: string
}
const tabs: Tab[] = [
  {
    name: '视频',
    type: 'video',
    url: 'https://t.bilibili.com/?tab=8'
  },
  {
    name: '番剧',
    type: 'bangumi',
    url: 'https://t.bilibili.com/?tab=512'
  }
]
export default {
  components: {
    VideoCard: () => import('../video-card.vue'),
    Icon: () => import('../../icon.vue')
  },
  data() {
    return {
      online: '--',
      isBottom: false,
      tabs,
      currentTab: tabs[0],
      feedCards: []
    }
  },
  watch: {
    currentTab(tab: Tab) {
      this.updateFeedCards(tab)
    }
  },
  methods: {
    async updateFeedCards(tab: Tab) {
      const { getVideoFeeds } = await import('../../../activity/feeds-apis')
      this.feedCards = await getVideoFeeds(tab.type)
    },
    changeTab(tab: Tab) {
      if (this.currentTab === tab) {
        open(tab.url, '_blank')
      } else {
        this.currentTab = tab
      }
    },
    scroll(orientation: number) {
      const contents = this.$refs.contents as HTMLElement
      const style = getComputedStyle(contents)
      const count = parseFloat(style.getPropertyValue('--card-count'))
      const width = parseFloat(style.getPropertyValue('--card-width'))
      const gap = 16
      const distance = count * (width + gap)
      contents.scrollBy(orientation * distance, 0)
    },
    checkScrollPosition: _.debounce(function checkScrollPosition(e: Event) {
      const element = e.target as HTMLElement
      this.isBottom = element.scrollWidth - element.scrollLeft === element.clientWidth
    }, 200),
  },
  async mounted() {
    this.updateFeedCards(this.currentTab)
    // const { getVideoFeeds } = await import('../../../activity/feeds-apis')
    // this.videoFeeds = await getVideoFeeds('video')
    // this.bangumiFeeds = await getVideoFeeds('bangumi')
    // const json = await Ajax.getJson(
    //   'https://api.bilibili.com/x/web-interface/online'
    // )
    // if (json.code === 0) {
    //   this.online = json.data.web_online
    // }
    let cancelHorizontalScroll: () => void
    addSettingsListener('simpleHomeWheelScroll', async (value: boolean) => {
      if (value) {
        const contents = this.$refs.contents as HTMLElement
        const { enableHorizontalScroll } = await import('../../../utils/horizontal-scroll')
        cancelHorizontalScroll = enableHorizontalScroll(contents)
      } else {
        cancelHorizontalScroll && cancelHorizontalScroll()
      }
    }, true)
  }
}
</script>

<style lang="scss">
.simple-home.snap .feeds .contents {
  scroll-snap-type: x mandatory;
}
.simple-home .feeds {
  justify-self: start;
  // display: grid;
  // grid-template-areas: 'header header' 'contents contents';
  // grid-template-columns: repeat(2, auto);
  // grid-template-rows: repeat(2, auto);
  // row-gap: 16px;
  // column-gap: 16px;
  display: flex;
  flex-direction: column;
  .header,
  .sub-header {
    grid-area: unset;
    margin-bottom: 16px;
    padding: 0 8px;
    .page {
      margin-right: 8px;
      display: flex;
      align-items: center;
      > * {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        background-color: #8882;
        border-radius: 50%;
        margin-left: 8px;
        cursor: pointer;
        &:hover {
          background-color: #8884;
        }
      }
      .prev-page .be-icon {
        transform: translateX(-1px);
      }
      .next-page .be-icon {
        transform: translateX(1px);
      }
    }
    .tab:nth-child(2) {
      margin-left: 32px;
    }
    .grow {
      flex-grow: 1;
    }
    .online {
      padding: 8px 16px;
      height: 32px;
      border-radius: 16px;
      background-color: #8882;
      color: inherit;
      font-size: 12px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }
  }
  .contents {
    // grid-area: contents;
    display: flex;
    overflow: auto;

    --card-width: 200px;
    --card-height: 250px;
    --card-count: 4;
    width: calc((var(--card-width) + 16px) * var(--card-count));
    // padding-bottom: 16px;
    scrollbar-width: none !important;
    min-height: calc(var(--card-height) + 16px);
    @media screen and (max-width: 900px) {
      --card-count: 3;
    }
    @media screen and (min-width: 1100px) {
      --card-count: 3;
    }
    @media screen and (min-width: 1300px) {
      --card-count: 4;
    }
    @media screen and (min-width: 1550px) {
      --card-count: 5;
    }
    @media screen and (min-width: 1850px) {
      --card-count: 6;
    }
    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
    .card-wrapper {
      padding: 0 8px;
      scroll-snap-align: start;
      flex-shrink: 0;
    }
    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 16px;
    }
  }
}
</style>