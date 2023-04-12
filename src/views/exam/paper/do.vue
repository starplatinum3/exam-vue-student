<template>
  <div>
    <div class="nk-container">
      <header
        data-v-5598cced=""
        class="nc-nav-header js-nowcoder-header default-header-page"
      >
        <span class="do-exam-time">
          <label>剩余时间：</label>
          <label>{{ formatSeconds(remainTime) }}</label>
        </span>

        <el-button type="" @click="drawIoShowingToggle"
          >drawIoShowingToggle</el-button
        >
        <el-button type="" @click="iframeDocShowingToggle"
          >iframeDocShowingToggle</el-button
        >

        <nav data-v-5598cced="">
          <a
            data-v-5598cced=""
            href="https://www.nowcoder.com/"
            class="logo"
            style="width: 140px"
            ><img
              data-v-5598cced=""
              src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1.png"
              alt="logo"
          /></a>
          <ul data-v-2a49ace6="" data-v-5598cced="" class="nc-nav-header-menu">
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <!-- href="https://www.nowcoder.com/landing" -->
              <!-- href="/index" -->
              <a data-v-2a49ace6="" href="/" class="">首页</a>
              <!-- /index -->
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <div data-v-2a49ace6="" class="el-dropdown">
                <a
                  data-v-2a49ace6=""
                  href="https://www.nowcoder.com/contestRoom"
                  class="hover-class head-title el-dropdown-selfdefine"
                  aria-haspopup="list"
                  aria-controls="dropdown-menu-4725"
                  role="button"
                  tabindex="0"
                  >题库</a
                >
                <ul
                  data-v-2a49ace6=""
                  class="el-dropdown-menu el-popper nav-dropdown"
                  id="dropdown-menu-4725"
                  style="display: none"
                >
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/exam/company"
                        class="tw-block"
                        >公司真题</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/exam/intelligent"
                        class="tw-block"
                        >专项练习</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/exam/interview"
                        class="tw-block"
                        >面试题库</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/exam/oj"
                        class="tw-block"
                        >在线编程</a
                      >
                    </div>
                  </li>
                  <!---->
                </ul>
              </div>
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <div data-v-2a49ace6="" class="el-dropdown">
                <!-- 面试 -->
                <!-- href="https://www.nowcoder.com/interview/center" -->
                  <!-- class="hover-class head-title el-dropdown-selfdefine" -->
                <a
                  data-v-2a49ace6=""
                  href="http://139.196.8.79/"
                  class="hover-class head-title el-dropdown-selfdefine"
                  aria-haspopup="list"
                  aria-controls="dropdown-menu-5272"
                  role="button"
                  tabindex="0"
                  >解题思路</a
                >
                <ul
                  data-v-2a49ace6=""
                  class="el-dropdown-menu el-popper nav-dropdown"
                  id="dropdown-menu-5272"
                  style="display: none"
                >
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/interview/ai/index"
                        class="tw-block"
                        >AI 模拟面试</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/interview/center"
                        class="tw-block"
                        >面经汇总</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <div data-v-2a49ace6="" class="el-dropdown">
                <a
                  data-v-2a49ace6=""
                  href="https://www.nowcoder.com/courses"
                  class="hover-class head-title el-dropdown-selfdefine"
                  aria-haspopup="list"
                  aria-controls="dropdown-menu-4498"
                  role="button"
                  tabindex="0"
                  >学习</a
                >
                <ul
                  data-v-2a49ace6=""
                  class="el-dropdown-menu el-popper nav-dropdown"
                  id="dropdown-menu-4498"
                  style="display: none"
                >
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/courses"
                        class="tw-block"
                        >课程</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/blog/blogCenter"
                        class="tw-block"
                        >专栏·文章</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/project/recommend"
                        class="tw-block"
                        >项目实战</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/library"
                        class="tw-block"
                        >图书馆</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/stacks/0/0"
                        class="tw-block"
                        >技术栈</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <a
                data-v-2a49ace6=""
                href="https://www.nowcoder.com/jobs/recommend/campus"
                class=""
                >求职</a
              >
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <div data-v-2a49ace6="" class="el-dropdown">
                <a
                  data-v-2a49ace6=""
                  href="https://www.nowcoder.com/discuss?cuid=a6dacc44-43bc-452f-89a3-c72b56d82762"
                  class="hover-class head-title el-dropdown-selfdefine"
                  aria-haspopup="list"
                  aria-controls="dropdown-menu-2462"
                  role="button"
                  tabindex="0"
                  >讨论区</a
                >
                <ul
                  data-v-2a49ace6=""
                  class="el-dropdown-menu el-popper nav-dropdown"
                  id="dropdown-menu-2462"
                  style="display: none"
                >
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/discuss?cuid=a6dacc44-43bc-452f-89a3-c72b56d82762"
                        class="tw-block"
                        >讨论区</a
                      >
                    </div>
                  </li>
                  <li
                    data-v-2a49ace6=""
                    tabindex="-1"
                    class="el-dropdown-menu__item"
                  >
                    <!---->
                    <div data-v-2a49ace6="" style="width: 100%">
                      <a
                        data-v-2a49ace6=""
                        href="https://www.nowcoder.com/circle"
                        class="tw-block"
                        >圈子</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
            <li data-v-2a49ace6="" class="hover-class nc-nav-header-menuitem">
              <a
                data-v-2a49ace6=""
                href="https://ac.nowcoder.com/acm/home"
                class=""
                >竞赛</a
              >
              <div data-v-2a49ace6="" class="line" style="display: none"></div>
              <!---->
            </li>
          </ul>
          <div
            data-v-5598cced=""
            class="nc-nav-header-search"
            style="margin-right: 12px; margin-left: auto"
          >
            <div
              aria-haspopup="listbox"
              role="combobox"
              aria-owns="el-autocomplete-8426"
              class="el-autocomplete"
            >
              <div class="el-input el-input--suffix is-borderless">
                <!----><input
                  type="text"
                  autocomplete="off"
                  valuekey="value"
                  popperclass="search-suggestion-list"
                  placeholder="搜索面经/职位/试题/公司"
                  maxlength="50"
                  fetchsuggestions="function () { [native code] }"
                  triggeronfocus="true"
                  debounce="200"
                  placement="bottom-start"
                  popperappendtobody="true"
                  visiblearrow="true"
                  class="el-input__inner"
                  role="textbox"
                  aria-autocomplete="list"
                  aria-controls="id"
                  aria-activedescendant="el-autocomplete-8426-item--1"
                  style="padding-right: 30px"
                />
                <!----><span class="el-input__suffix"
                  ><span class="el-input__suffix-inner"
                    ><i class="el-input__icon el-icon-search"></i>
                    <!---->
                    <!---->
                    <!---->
                    <!----></span
                  >
                  <!----></span
                >
                <!---->
                <!---->
              </div>
              <div
                role="region"
                class="
                  el-autocomplete-suggestion el-popper
                  search-suggestion-list
                "
                style="display: none"
              >
                <div class="el-scrollbar nowcoder-custom">
                  <div
                    class="el-autocomplete-suggestion__wrap el-scrollbar__wrap"
                    style="margin-bottom: -17px; margin-right: -17px"
                  >
                    <ul
                      class="
                        el-scrollbar__view
                        el-autocomplete-suggestion__list
                      "
                      role="listbox"
                      id="el-autocomplete-8426"
                    ></ul>
                  </div>
                  <div class="el-scrollbar__bar is-horizontal">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateX(0%)"
                    ></div>
                  </div>
                  <div class="el-scrollbar__bar is-vertical">
                    <div
                      class="el-scrollbar__thumb"
                      style="transform: translateY(0%)"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
          </div>
          <div data-v-61746d8a="" data-v-5598cced="" class="el-dropdown">
            <a
              data-v-61746d8a=""
              href="https://www.nowcoder.com/creation/manager/content"
              target="_blank"
              class="publish-enter el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-7364"
              role="button"
              tabindex="0"
            >
              创作者中心
              <i
                data-v-61746d8a=""
                class="el-icon-arrow-down el-icon--right"
              ></i
            ></a>
            <ul
              data-v-61746d8a=""
              class="el-dropdown-menu el-popper creation-enter-dropdown"
              id="dropdown-menu-7364"
              style="display: none"
            >
              <div data-v-61746d8a="" class="publish-options">
                <a
                  data-v-61746d8a=""
                  href="https://www.nowcoder.com/creation/write/dynamic?publishEntrancePage=header"
                  target="_blank"
                  ><img
                    data-v-61746d8a=""
                    src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1658118477816UCUNV.png"
                  />
                  发动态
                </a>
                <a
                  data-v-61746d8a=""
                  href="https://www.nowcoder.com/discuss/v2/post?type=0&amp;navigation=1"
                  target="_blank"
                  ><img
                    data-v-61746d8a=""
                    src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1658118495689CNIDW.png"
                  />
                  写文章
                </a>
              </div>
            </ul>
          </div>
          <!---->
          <div data-v-5598cced="" class="right" style="margin-left: 12px">
            <div
              data-v-5598cced=""
              class="icon-style"
              style="margin-right: 8px"
            >
              <a
                data-v-5598cced=""
                href="https://nowpick.nowcoder.com/?channel=zz_guide"
                target="_blank"
                ><span
                  data-v-6acb0236=""
                  data-v-5598cced=""
                  tagname="span"
                  class="ncicon el-tooltip ncicon-bleed"
                  aria-label="Woyaozhaoren001"
                  aria-describedby="el-tooltip-4630"
                  tabindex="0"
                  ><svg
                    data-v-6acb0236=""
                    focusable="false"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path
                        d="M708.2157 56c142.0402 0 257.4554 113.9948 259.7495 255.4883l.0348 4.296v392.4314c0 27.0434-21.923 48.9665-48.9664 48.9665-26.773 0-48.5275-21.4868-48.96-48.1567l-.0065-.8098V315.7843c0-88.4942-71.0213-160.4005-159.1749-161.8297l-2.6765-.0217H315.7843c-88.4942 0-160.4005 71.0213-161.8297 159.1749l-.0217 2.6765v392.4314c0 88.4942 71.0213 160.4005 159.1749 161.8297l2.6765.0217h392.4314c27.0434 0 48.9665 21.923 48.9665 48.9665 0 26.773-21.4868 48.5274-48.1567 48.9664H315.7843C173.744 968 58.3289 854.0052 56.0348 712.5117L56 708.2157V315.7843C56 173.744 169.9948 58.3289 311.4883 56.0348l4.296-.0348h392.4314z"
                      ></path>
                      <path
                        d="M358.3124 261c-8.1545 0-14.2138 1.9445-18.4039 5.7002-3.8062 3.4116-5.9561 9.763-6.1119 19.285l-.0068.553-.0024.5897v74.7694H291.21c-9.051 0-15.0986 2.1125-18.4913 6.0471-3.5785 4.15-5.497 10.978-5.497 20.6174 0 9.2776 1.9094 15.9202 5.497 20.0808 3.2581 3.7785 8.9615 5.876 17.4094 6.037l.5316.0075.5503.0026h42.5773v107.7806l-2.5909 1.4247c-7.184 3.9502-14.1895 7.7215-21.0167 11.3139-6.202 3.2634-12.5497 6.3794-19.043 9.348l-2.0308.9201-.4934.2531c-18.2702 9.4625-24.6513 21.3635-20.2824 36.8368l.1357.47.1331.4431.1433.4193c2.972 8.6098 7.4078 13.5559 13.3838 15.3797l.3399.0999.3432.0932c6.8932 1.7978 15.347.2326 25.4907-5.001a413.694 413.694 0 0 1 7.4333-3.6215l1.5313-.724c2.2846-1.0749 4.626-2.2565 7.0137-3.5395l1.026-.556 8.4832-4.6738v108.2873c0 5.8279-2.4039 10.761-7.002 14.3902-4.531 3.5763-9.4282 4.8247-14.2644 3.3442l-.3453-.1104-.1921-.0684c-9.1588-3.4731-16.4034-3.6225-21.9817-.7625-5.6641 2.904-9.6789 7.63-12.1644 14.4637l-.175.4917c-2.8274 7.852-2.9785 14.6519-.5988 20.5996 2.3209 5.801 7.9736 10.8413 17.2132 14.9825 7.6811 3.3388 15.3125 5.1633 22.9176 5.4938l3.6788.1512 2.642.0968 3.3666.107 1.6162.044 2.3405.0544 2.24.04 1.4373.019 2.072.0196h1.3254c16.7331 0 28.1453-4.8785 34.8111-14.4873 6.8306-9.8463 10.4327-24.0468 10.6403-42.6469l.0072-.8616.0024-.87V551.7554l2.1837-1.4885c7.8065-5.3213 15.3452-10.73 22.616-16.2262 6.7128-5.0743 13.04-10.3748 18.9824-15.9014l1.575-1.4782.3521-.2347c1.475-.9831 2.7116-2.1815 3.731-3.6165l.2503-.3637 4.7789-7.1666 4.0314 8.0588.3426.6692.3233.6148.3036.56.2834.5045c.091.159.1787.3085.2628.4488.2624.4372.5545.8326.8781 1.1906l.2487.2614.1604.1604.1452.1742c6.3323 7.597 12.546 11.3392 18.6695 11.624 3.9759.1849 9.073-1.4667 15.1954-5.0376l.9033-.5363c1.973-1.1916 4.0485-2.5767 6.2236-4.1577l1.011-.7437 1.025-.7715 1.0391-.7995 1.053-.8275c13.7723-10.9445 25.9398-22.0513 36.504-33.317 10.4829-11.179 19.7462-23.5853 27.792-37.225 8.0471-13.6416 14.8817-28.8843 20.4993-45.733 4.1034-12.3071 7.7472-26.0402 10.9277-41.194l.591-2.858c.7806-3.8329 1.5323-7.7545 2.255-11.7648l.2696-1.508.9973-5.666h91.1614c8.6155 0 14.6248 1.2874 18.2844 4.4235 3.7428 3.2073 5.5373 8.8472 6.0061 16.9677l.0287.533.0052.1456c.3631 17.4263-.4555 33.43-2.4612 48.014-1.9555 14.2178-4.871 26.758-8.7604 37.6252l-.3563.9833-.1115.3176c-4.8951 13.5746-18.6425 20.1348-40.0128 20.1348-6.6437 0-12.9341-.37-18.8718-1.112-6.0025-.7501-12.8687-2.2343-20.5993-4.4426l-1.2315-.3404c-12.1939-3.3009-20.746-3.52-25.4554-1.0986-4.8607 2.4991-8.7627 7.7132-11.5897 15.9272l-.228.6685c-3.4565 9.4243-3.3828 16.6446-.1487 21.9866 3.3163 5.4777 11.1033 10.0387 23.5444 13.312.6185.1595 1.2312.3154 1.8379.4675l1.8025.445c3.2721.7955 6.3656 1.478 9.2793 2.0478l1.5714.2996c4.6607.8654 8.8393 1.4291 12.5305 1.6927.6719.048 1.3511.0938 2.0379.1374l2.0826.1244c1.0525.0589 2.1217.1129 3.2077.162l2.1944.0917c.3694.0142.7408.0278 1.114.041l2.2613.072c.7613.0218 1.53.0415 2.306.059l2.3507.0459c.3955.0065.7929.0125 1.1921.018l2.4176.0262c1.22.0098 2.4567.0148 3.71.0148 23.8826 0 43.6208-4.4615 59.2744-13.307 15.3264-8.6607 26.3631-23.0383 33.1465-43.3835 4.5462-13.6353 7.9674-29.1583 10.2539-46.5665l.2294-1.7924c.0751-.6028.149-1.2108.2215-1.824l.2136-1.8558c.07-.6239.1385-1.253.2058-1.8874l.1979-1.919c.0323-.3225.0643-.6463.096-.9714l.186-1.9665.1782-1.9982.1702-2.0298c.0277-.341.0551-.6832.0822-1.0267l.1584-2.0772.1505-2.1089.1426-2.1404.1348-2.172.1268-2.2037.1189-2.2353.111-2.2668.103-2.2985.0952-2.33.0872-2.3615c.014-.3962.0275-.7938.0407-1.1926l.0753-2.409c.012-.404.0235-.8095.0348-1.2162l.0634-2.4563.0556-2.4878c.0086-.4172.0169-.8358.0248-1.2557l.0436-2.535.0358-2.5667.0278-2.5982.0198-2.6296.0159-2.6612v-2.6927c0-5.716-.29-11.0187-.865-15.9098l-.172-1.3863c-1.678-12.834-5.3798-22.7417-11.0128-29.7525-7.5042-9.3397-20.736-14.2686-40.0635-14.4926l-.6929-.006-.707-.002H473.1916c-9.4714 0-15.8543 2.0776-19.4197 5.9162-3.6784 3.9605-5.6421 10.4544-5.6421 19.675 0 9.2205 1.9637 15.7143 5.6421 19.6748 3.4251 3.6876 9.449 5.7503 18.3025 5.9066l.5456.0072.5716.0025h64.9643l-.984 5.8318c-5.1106 30.2917-13.9974 55.8463-26.6989 76.6423-12.5077 20.4787-30.223 39.2016-53.108 56.177l-.778.5732-.299.2972c-1.3398 1.312-2.6425 2.4913-3.9106 3.5379l-.5414.4404-.5372.4243a44.0046 44.0046 0 0 0-3.448 2.9785l-.6491.6355-5.3613 5.3599-2.816-7.0386c-.5557-1.3887-1.2365-2.6139-2.0416-3.687-.7381-.984-1.4713-2.0374-2.2004-3.1606l-.437-.6823-.3924-.6282-.213-.1667c-5.96-4.6153-11.4653-6.7329-16.5808-6.5675l-.383.0167-.3724.0245c-5.69.4376-12.2216 3.5373-19.5261 9.4722l-.3397.2778-.2302.227c-.4406.423-.9043.843-1.391 1.2604l-.4942.4163-.5096.4146c-.5259.4206-1.0096.8362-1.4303 1.226l-.2446.2305-8.8638 8.6808v-75.9309h29.1568c9.051 0 15.0986-2.1125 18.4913-6.0471 3.5876-4.1606 5.4969-10.8032 5.4969-20.0808 0-9.6394-1.9185-16.4674-5.4969-20.6174-3.2581-3.7785-8.9616-5.876-17.4095-6.037l-.5315-.0075-.5503-.0026h-29.1568v-74.7694c0-9.1207-2.2361-15.6037-6.527-19.7506-4.373-4.2262-10.457-6.3773-18.5349-6.3773z"
                      ></path>
                      <path
                        d="m699.396 535.2474.7398.0082c17.6834.1991 30.0041 4.021 37.1248 11.1399 7.219 7.2172 11.0474 19.7778 11.1503 37.858v124.4148l-.0086.771c-.1945 17.3996-3.7203 29.7978-10.2907 37.2833-6.4942 7.3985-18.6146 11.3465-36.6137 11.4472H517.056l-1.3797-.0167-1.3561-.03c-16.8043-.4683-28.087-4.4546-34.0796-11.5869-6.5448-7.7895-10.0003-20.382-10.1013-37.8705V584.212l.0083-.76c.1886-17.4046 3.6322-29.7242 10.0274-37.0311 6.3046-7.2036 18.5216-11.076 36.8727-11.1735H699.396zm-20.6029 61.1823H538.716l-.3498.0021-.6078.014-.575.026c-4.376.2516-5.788 1.6374-5.845 4.9415l-.002.2135v90.1198l.003.3638c.0387 2.1842.4434 3.4215.948 3.926l.024.02.0859.0528c.037.02.0827.0425.1372.0668l.19.078.244.0863c.181.0595.3991.1225.656.185 1.1435.278 2.6983.4396 4.6375.46l.4215.0021H678.793l.6435-.0058c.209-.0039.4125-.0097.6106-.0175l.5786-.0296c.0938-.006.1863-.0124.2775-.0193l.5317-.048c3.779-.3971 5.1193-1.8067 5.2336-4.6582l.0084-.4186v-90.1146l-.0023-.2616c-.0613-3.1033-1.4698-4.5805-5.7652-4.9113l-.5641-.036-.294-.0135-.6126-.0178-.6457-.006z"
                      ></path>
                    </g></svg></span
              ></a>
            </div>
            <div
              data-v-5598cced=""
              class="icon-style"
              style="margin-right: 8px"
            >
              <a
                data-v-5598cced=""
                href="https://www.nowcoder.com/sns/message/889007829/conversation-list"
              >
                <div
                  data-v-5598cced=""
                  class="el-tooltip"
                  aria-describedby="el-tooltip-773"
                  tabindex="0"
                  style="position: relative"
                >
                  <span
                    data-v-6acb0236=""
                    data-v-5598cced=""
                    tagname="span"
                    class="ncicon tw-text-gray-600 ncicon-bleed"
                    aria-label="Xiaoxi002"
                    ><svg
                      data-v-6acb0236=""
                      focusable="false"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      width="20"
                      height="20"
                      aria-hidden="true"
                    >
                      <g fill="currentColor" fill-rule="nonzero">
                        <path
                          d="M842.6667 144H181.3333c-79.529 0-144 64.471-144 144v448c0 79.529 64.471 144 144 144h661.3334c79.529 0 144-64.471 144-144V288c0-79.529-64.471-144-144-144zm-661.3334 96h661.3334c26.5096 0 48 21.4903 48 48v448c0 26.5097-21.4904 48-48 48H181.3333c-26.5096 0-48-21.4903-48-48V288c0-26.5097 21.4904-48 48-48z"
                        ></path>
                        <path
                          d="M82.274 189.7056c15.7468-20.9957 45.392-25.4182 66.5612-10.0712l.6389.4712L502.4 444.8c5.589 4.1918 13.2373 4.2654 18.8986.2206l.3014-.2206 351.3645-263.5233c21.2077-15.9058 51.2942-11.6078 67.2 9.6 15.7467 20.9956 11.6916 50.6933-8.9689 66.7185l-.6311.4815L579.2 521.6c-39.424 29.568-93.4842 29.8637-133.2009.887L444.8 521.6 91.874 256.9056c-21.2076-15.9058-25.5057-45.9923-9.6-67.2z"
                        ></path>
                        <path
                          d="M512 144c26.5097 0 48 21.4903 48 48 0 26.2446-21.0627 47.5697-47.2062 47.9936L512 240H181.3333c-26.2445 0-47.5697 21.0627-47.9935 47.2062l-.0065.7938v224c0 26.5097-21.4903 48-48 48-26.2445 0-47.5697-21.0627-47.9935-47.2062L37.3333 512V288c0-78.7337 63.188-142.709 141.6187-143.9807l2.3813-.0193H512z"
                        ></path>
                        <path
                          d="M842.6667 144c78.7337 0 142.709 63.188 143.9807 141.6187l.0193 2.3813v224c0 26.5097-21.4904 48-48 48-26.2446 0-47.5697-21.0627-47.9936-47.2062l-.0064-.7938V288c0-26.2446-21.0627-47.5697-47.2063-47.9936l-.7937-.0064H512c-26.5097 0-48-21.4903-48-48 0-26.2446 21.0627-47.5697 47.2062-47.9936L512 144h330.6667z"
                        ></path>
                      </g></svg
                  ></span>
                  <div
                    data-v-5598cced=""
                    class=""
                    style="z-index: 1; box-sizing: border-box"
                  ></div>
                </div>
              </a>
            </div>
            <div data-v-5598cced="" style="margin-right: 8px">
              <div
                data-v-2caa36f6=""
                data-v-5598cced=""
                style="position: relative; height: 36px"
              >
                <img
                  data-v-2caa36f6=""
                  src="data:image/png;base64,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"
                  alt="openVip"
                  class="openvip"
                />
                <div
                  data-v-2caa36f6=""
                  class="vip-card-dropdown"
                  style="display: none"
                >
                  <div data-v-2caa36f6="" class="vip-card-container">
                    <div data-v-2caa36f6="" class="title-line-1">
                      牛客会员·轻松拿OFFER
                    </div>
                    <div data-v-2caa36f6="" class="title-line-2">
                      求职路上牛客为你保驾护航
                    </div>
                    <div data-v-2caa36f6="" class="vip-desc-card-warpper">
                      <div data-v-2caa36f6="" class="privilege-card">
                        <img
                          data-v-2caa36f6=""
                          src="data:image/png;base64,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"
                          alt="vipCircle"
                        />
                        <span data-v-2caa36f6="">视频题解300+</span>
                      </div>
                      <div data-v-2caa36f6="" class="privilege-card">
                        <img
                          data-v-2caa36f6=""
                          src="data:image/png;base64,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"
                          alt="vipLabel"
                        />
                        <span data-v-2caa36f6="">会员专属标识</span>
                      </div>
                      <div data-v-2caa36f6="" class="privilege-card">
                        <img
                          data-v-2caa36f6=""
                          src="data:image/png;base64,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"
                          alt="vipQuestion"
                        />
                        <span data-v-2caa36f6="">会员题目150+</span>
                      </div>
                    </div>
                    <div data-v-2caa36f6="" class="vip-btns">
                      <div data-v-2caa36f6="" class="learn-vip-btn-bg">
                        <a
                          data-v-2caa36f6=""
                          href="https://www.nowcoder.com/users/vip/detail?pageSource_var=%E5%AF%BC%E8%88%AA%E6%A0%8F-%E5%9B%BA%E5%AE%9A%E4%BD%8D"
                          target="_blank"
                          class="learn-vip-btn"
                          ><span data-v-2caa36f6="">了解会员</span></a
                        >
                      </div>
                      <div data-v-2caa36f6="" class="open-vip-btn">
                        <span data-v-2caa36f6="">成为会员</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-5598cced="">
              <div data-v-e2880ffa="" data-v-5598cced="" class="el-dropdown">
                <div
                  data-v-e2880ffa=""
                  class="nc-nav-header-avatar el-dropdown-selfdefine"
                  aria-haspopup="list"
                  aria-controls="dropdown-menu-2222"
                  role="button"
                  tabindex="0"
                >
                  <span
                    data-v-e2880ffa=""
                    class="el-avatar el-avatar--circle"
                    style="height: 32px; width: 32px; line-height: 32px"
                    ><img
                      src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/889007829_1569925458763_025D697BCBE26745C4064EE75FB3AA64.png"
                      style="object-fit: cover"
                  /></span>
                  <!---->
                  <!---->
                </div>
                <ul
                  data-v-e2880ffa=""
                  class="
                    el-dropdown-menu el-popper
                    nc-nav-header-profile-dropdown
                  "
                  id="dropdown-menu-2222"
                  style="display: none"
                >
                  <img
                    data-v-e2880ffa=""
                    src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1660822934823UNILG.png"
                    class="avatar-card-bg"
                  />
                  <div data-v-e2880ffa="" class="nc-nav-header-profile">
                    <div data-v-e2880ffa="" class="self-header-info-name">
                      <div data-v-e2880ffa="" class="avatar-card">
                        <span
                          data-v-e2880ffa=""
                          class="el-avatar el-avatar--circle"
                          style="height: 48px; width: 48px; line-height: 48px"
                          ><img
                            src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/889007829_1569925458763_025D697BCBE26745C4064EE75FB3AA64.png"
                            style="object-fit: cover"
                        /></span>
                        <!---->
                        <!---->
                      </div>
                      <div data-v-e2880ffa="" class="name-desc">
                        <div data-v-e2880ffa="" class="name">
                          <a
                            data-v-e2880ffa=""
                            href="https://www.nowcoder.com/profile/889007829"
                            >喵奇葩~哞~咩~</a
                          >
                          <img
                            data-v-e2880ffa=""
                            src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1661257659531YZASW.png"
                            alt="level"
                            class="name-level"
                          />
                        </div>
                        <div data-v-e2880ffa="" class="identity">
                          <div
                            data-v-e2880ffa=""
                            class="hover-to-green"
                            style="
                              width: max-content;
                              display: flex;
                              align-items: center;
                            "
                          >
                            暂未认证，去认证<span
                              data-v-6acb0236=""
                              data-v-e2880ffa=""
                              tagname="span"
                              class="ncicon ncicon-bleed"
                              aria-label="Zhankai002"
                              ><svg
                                data-v-6acb0236=""
                                focusable="false"
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                width="12"
                                height="12"
                                aria-hidden="true"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="nonzero"
                                  d="M289.3514 187.8043c-19.8576-17.5625-21.7181-47.8974-4.1557-67.755 17.3869-19.659 47.292-21.679 67.1561-4.6767l.5989.521L723.848 443.9236c33.096 29.2708 36.1968 79.829 6.926 112.9249a80 80 0 0 1-6.115 6.1989l-.811.7271-370.8973 328.0299c-19.8576 17.5624-50.1925 15.7019-67.755-4.1557-17.3868-19.659-15.7371-49.5868 3.5654-67.2242l.5903-.5307L646.696 503.85 289.3514 187.8043z"
                                ></path></svg
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    data-v-e2880ffa=""
                    href="https://www.nowcoder.com/profile/889007829"
                    class="self-page"
                    >个人主页</a
                  >
                  <div data-v-e2880ffa="" class="line-long"></div>
                  <div data-v-e2880ffa="" class="vip-card">
                    <img
                      data-v-e2880ffa=""
                      src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1660831936829GCLLO.png"
                    />
                    <div data-v-e2880ffa="" class="vip-text-label">
                      <div data-v-e2880ffa="" class="nk-vip-text">牛客会员</div>
                      <img
                        data-v-e2880ffa=""
                        src="data:image/png;base64,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"
                        class="vip-label-pic"
                      />
                    </div>
                    <div data-v-e2880ffa="" class="nk-vip-desc">
                      <a
                        data-v-e2880ffa=""
                        href="https://www.nowcoder.com/users/vip/detail?pageSource_var=%E5%AF%BC%E8%88%AA%E6%A0%8F-%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF"
                        target="_blank"
                        >求职路上牛客为你保驾护航</a
                      >
                    </div>
                    <div data-v-e2880ffa="" class="open-vip-btn">
                      <a
                        data-v-e2880ffa=""
                        href="https://www.nowcoder.com/users/vip/detail?pageSource_var=%E5%AF%BC%E8%88%AA%E6%A0%8F-%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF"
                        target="_blank"
                        >立即开通</a
                      >
                    </div>
                    <!---->
                  </div>
                  <div data-v-e2880ffa="" class="nc-nav-header-link">
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,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"
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >我的简历</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,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"
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >内容</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABI1BMVEUAAACynf+wm/+3o/+dcf+Maf+7qP+gc/+Mav/Aqf/CrP+mkf+xnf+xnP+0ov+EZf+GZv+Maf+BZP+2of+/rP+JaP+IZ//Er/+8pv+slP9+Y//Dsv+7pP+xmv+UbP+Ra//Itv/HtP+4of+ehP/LuP/Br/++qP+rlv+Tef/18v+umv+DYP+6qf+kjv+Sa/+Pav+AY/+GYv/49v/Gsv+znP+qkP+nj/+Zb/+OaP/39P+ijP+bgP+MZv+9rf+2nv+iif+Yf/+Sdv+tmP+ghv+ccP+Wbf/As//BrP+4o/+ok/+okv+We/+Xbf+PdP+JZP/Ou/+ulv+ljP+2pv+xnv+wl/+Uff+McP/IuP+bhP+XfP/x7f+lk/+ch/+Ha//u5P/g1f/TxP9Ww3/UAAAAD3RSTlMA6Pzn29vBcXE9PPzww7AnWF2nAAAC70lEQVQ4y8XR2XaaUBiG4aRJ2iYdHEBBAcMoqDgQEFEEB2IUZ2s0miZt7/8q+rMdEjzv6utyefKsb7Pl7P/36fIeqtVq4/G418tkMrdQuWxdfT5xB9UDBZUQiwWF5SViAILes0TiKgTv74GVLKsJWeUyOIDIJZNhiNxUKxQ0bRpYK3Zw0RCs1Xoli6vf3d3Vc8Q0FrOOLHoCx71SMxe4eu5Zg0lgexcJwXEvc9vUc7CXe5a0RKy5Z+DCsAcQPSKkTZMJ5BCLxMMQ/hKrOZ1qWkGLRkEeWbwSgsGbKDfBBYtAwSEG7gSWSuUYldsnRaIHl06nQxDehZWAW6N7158jh2PTIfj967mZKVtJqg4MyjnxSOAqgXtdOurHnfvmOyrTFWKxZFSLFIIAwVzg4jKuqg62k1/wJwo3UuYokUBXAAYFrtLA1eUP9cH5gGCDAjhg/KKwTibf32KDq92feYAP+T1kKWfAzIueoKzB7U9tO5L/0gjDJ8kZ5OWiYLdHk9fdXMdh5dVqcwJZycHyKYCjkdIZrSuVDfXHUCbK6qXoL99BiZVwnkktBHurKJ2OKf3+hW/Xk8mqvYfSHhIIzk1PaG+VzmRiyyNgHaVtt3x5qTqUdFwkcJp5NFsePGSw2ZnAV1nZm4bfxVT8CKkAGkx10RJAbhXUaNQWvIWcB8hRXQSLlEhJpGvMQXqCbdttyLYFoVWU80vakY5QFzkiO3CZFMiW5wkoz2uY1a6BkRLF6m9Qx0neeJxXzQWyrVZrUTSHKQYbZAn9idtDbsbCJMm7QFPVQ6k5A3vZvs7NDlCfsTqBZ2nXYEAemj8aLh9AVnyDIsh+luZd1zAMBmW4LjYg8T7FsrO3o0W4DmyS9IDnMRfDXPjwPAl7BCeKM1ZG0Jd2sI8gSAh+aJrM4gTBsaJIfEDwnBFFloOzYZIk6SCSJmEuiwPUAWIXCN4MGbzfz8IeDGLH+AHa7BM4lr85Q12fD03UcJfvpyD5UP7i+uxf9Bce/79+xlo7AwAAAABJRU5ErkJggg=="
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >投递记录</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,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"
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >收藏</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,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"
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >刷题</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,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"
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >牛币兑换</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" style="display: inline-block">
                      <div data-v-e2880ffa="" class="nc-nav-header-linkitem">
                        <img
                          data-v-e2880ffa=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAvVBMVEUAAADoYQnnWQfnUAXoXgfoUwboWQfoTwbnSwTnUAXoZgnnVAboYwjoWgfwVg/oZgnnTAXoVwbnSgXoVQfrUAn/XijoWwjmRwTmRgToWAbnTAXmSgXmSgToVwjlRwXoXArlRgPpaQrmWAbnUgfnaAnnVwfnSQTpaQrpXQjmRQPnUwfpUQXmUAXnWgfnXAfmUgXnVAbnVgbnXgfmSgTnWAboYQjmTAToZQnnWwfoXwjmSAPoYwjlRgPmTgTpZwkeRxBqAAAALHRSTlMAjIz89NRtV8rKjIz01BD0s9R/XRwG6d7Op5aWlHJnPffz7uXXwauBYFFKL5YzwCgAAAFrSURBVDjLxdLZVsJAEATQcQFEBZEdFXBfyU4QsvD/n2WnqSE9OR7nTer5nurppNWh8/78cEW5LHKKDFuTXrvi5tvt9puSxnG82YRh6Lru2nGc5eN0YMA3ciVkRo5gELwYpee7vpRYKPrI+X6tLSGztJzLjJ3vdaqQWIw+jPUD3/O8xaeAeB7GwlEfw6aAaenWtAePDYgVbrHoS8jOxb5w/s7lvT08IlbsAeeAweVdCfG+YX2X6SRgx/CuhKhznZbSaYCtVqsbAbGvgOpJw0hAdvQ6CZvaRbcC6nUlZFaBrv5t1wKyiyhimf3vkDDP2SVRV0B8ZgMSY5fMlM5xwfgMaiU8A0yyvoS4Agm1G6sSLuF+gVn2IaCjz0XCKClY1lEC6ms2IM/NRm0JibEzYMGycV+ZEMdXgffdgTIhFxIUD3oddWY8VkJ9zSdz9WcuuI5cQ1mgR2FnhXBWiLl2CGeHcNbU4awZ9L7U/+cHyYt0z/ZN174AAAAASUVORK5CYII="
                          style="margin-top: 8px; width: 20px; height: 20px"
                        />
                        <span data-v-e2880ffa="" style="margin-top: 8px"
                          >我要招聘</span
                        >
                      </div>
                    </div>
                    <div data-v-e2880ffa="" class="line"></div>
                    <div data-v-e2880ffa="" class="account-set">
                      <div
                        data-v-e2880ffa=""
                        class="account-set-item"
                        style="margin-left: 44px"
                      >
                        账号设置
                      </div>
                      <div
                        data-v-e2880ffa=""
                        style="
                          width: 1px;
                          height: 14px;
                          background: rgb(248, 248, 248);
                          margin-left: 44px;
                        "
                      ></div>
                      <div
                        data-v-e2880ffa=""
                        class="account-set-item"
                        style="margin-left: 44px"
                      >
                        退出登录
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div class="nk-main clearfix">
        <div class="module-box subject-box">
          <div class="nowcoder-topic">
            <div class="com-subject-wrap">
              <div class="com-subject-title">{{ form.name }}</div>
              <!-- <div class="com-subject-title">中兴软件类笔试试卷A</div> -->
              <i class="v-tag">企业提供原题</i>
              <!-- class="progress-time"  -->
              <!-- // href="javascript:void(0);"  -->
              <a class="progress-time progressTime" title="暂停">
                <i class="ico-time-control progressTime"></i>

                <!-- <span
                  data-left="7137"
                  data-time="63"
                  class="time-text"
                  style="font-size: 20px"
                  >00:01:19</span
                > -->

                <span class="do-exam-time">
                  <label>剩余时间：</label>
                  <label>{{ formatSeconds(remainTime) }}</label>
                </span>
              </a>
            </div>
            <div class="subject-title-box">
              <div class="answer-progress">18/22</div>
              <!-- <div class="subject-title">[单选题]</div> -->
              <div class="subject-title">
                [{{ questionItem.questionTypeName }}]
              </div>
            </div>
            <div class="subject-main">
              <div class="subject-content">
                <!-- titleItem -->
                <!-- {{titleItem}} -->

                <!-- questionItem

                {{ questionItem }}
                {{ questionItem.title }} -->
                <!-- 加载题目 -->

                <!-- :iframeDocShowing="iframeDocShowing" -->
                <QuestionEditNowCoder
               
                  :qType="questionItem.questionType"
                  :question="questionItem"
                  :answer="answer.answerItems[questionItem.itemOrder - 1]"
                />

                <!-- <div class="subject-question">
                  <span style="color: rgb(77, 77, 77)"
                    >对 n 个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有
                    35 个结点<span style="color: rgb(77, 77, 77)"
                      >，则 n 的值是：</span
                    ></span
                  >
                </div> -->
                <!-- <a
                  href="javascript:void(0);"
                  class="subject-options"
                  data-id="4722112"
                >
                  <label class="radio" id="jsCpn_0_checkbox_0">
                    <span class="icons"></span>
                    <input type="radio" data-toggle="radio" value="4722112" />
                    <pre>16</pre>
                  </label>
                </a>
                <a
                  href="javascript:void(0);"
                  class="subject-options"
                  data-id="4722113"
                >
                  <label class="radio" id="jsCpn_1_checkbox_1">
                    <span class="icons"></span>
                    <input type="radio" data-toggle="radio" value="4722113" />
                    <pre>17</pre>
                  </label>
                </a>
                <a
                  href="javascript:void(0);"
                  class="subject-options"
                  data-id="4722114"
                >
                  <label class="radio" id="jsCpn_2_checkbox_2">
                    <span class="icons"></span>
                    <input type="radio" data-toggle="radio" value="4722114" />
                    <pre>18</pre>
                  </label>
                </a>
                <a
                  href="javascript:void(0);"
                  class="subject-options"
                  data-id="4722115"
                >
                  <label class="radio" id="jsCpn_3_checkbox_3">
                    <span class="icons"></span>
                    <input type="radio" data-toggle="radio" value="4722115" />
                    <pre>19</pre>
                  </label>
                </a>
                <a
                  href="javascript:void(0);"
                  class="subject-options"
                  data-id="4722116"
                >
                  <label class="radio" id="jsCpn_4_checkbox_4">
                    <span class="icons"></span>
                    <input type="radio" data-toggle="radio" value="4722116" />
                    <pre>20</pre>
                  </label>
                </a> -->
              </div>

              <div class="subject-action clearfix">
                <div class="subject-opr">
                  <span class="subject-opr-item"
                    ><i class="ico-collect"></i
                    ><a
                      href="javascript:void(0);"
                      class="js-follow nc-req-auth"
                      data-id="2718042"
                      >收藏本题</a
                    ></span
                  >

                  <span class="subject-opr-item"
                    ><i class="ico-mark"></i
                    ><a
                      href="javascript:void(0);"
                      class="js-mark nc-req-auth"
                      data-id="2718042"
                      data-tid="63829344"
                      data-title="标记该题，着重查看。"
                      data-tips-index="1"
                      >标记一下</a
                    ></span
                  >

                  <a
                    href="javascript:void(0);"
                    class="subject-opr-item js-call-help"
                    ><span class="icon-nc-share3"></span>场外求助</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="subject-opr-item js-feedback"
                    ><span class="icon-nc-question-sign"></span>知识点有误？</a
                  >
                </div>

                <div class="subject-next">
                  <!-- method="post" -->
                  <!-- action="https://www.nowcoder.com/question/next?pid=43831164&amp;qid=2718042&amp;tid=63829344" -->
                  <form id="submitForm">
                    <!-- <el-button type="" @click="toDrawIo">toDrawIo</el-button> -->

                    <input type="hidden" name="content" id="answer" />
                    <!-- type="submit" -->
                    <!-- drawIoShowingToggle -->
                    <input
                      @click="drawIoShowingToggle"
                      name="button"
                      class="btn btn-primary"
                      value="画流程图"
                    />

                      <!-- <input
                      @click="iframeDocShowDo"
                      name="button"
                      class="btn btn-primary"
                      value="iframeDocShowingToggle"
                    /> -->

                    <input
                      @click="prevProblem"
                      name="button"
                      class="btn btn-primary"
                      value="上一题"
                    />

                    <input
                      id="aheadFinish"
                      name="button"
                      class="btn warning-btn"
                      value="提前交卷"
                      @click="submitFormConfirm"
                    />
                    <!-- type="submit" -->
                    <input
                      id="next"
                      @click="nextProblem"
                      name="button"
                      class="btn btn-primary"
                      value="下一题"
                    />
                  </form>
                </div>
              </div>
              <div class="subject-new-tips">
                * 交卷即可查看全部答案和解析，完成所有题目有机会获得企业内推
              </div>
            </div>

            <!-- 展开的时候加class:open -->
            <div class="answer-sheet-box open">
              <div class="answer-sheet-type">
                <i class="icon-nc-make-up"></i>
                <span>单选题14道</span>
                <span>不定项选择题6道</span>
                <span>编程题2道</span>
              </div>

              <a href="javascript:void(0)" class="card-unfold">收起答题卡</a>
              <a href="javascript:void(0)" class="card-fold">展开答题卡</a>
              <ul class="answer-sheet-num clearfix">
                <!-- <li></li> -->

                <!-- v-for="(item,index) in dataLi"      -->

                <!-- class="answering-num" -->
                <!-- class="answering-num" -->
                <li
                  @click="changeProblem(index)"
                  v-for="(questionItem, index) in titleItem.questionItems"
                  :key="questionItem.id + '' + '-' + index"
                >
                  <a
                    href="javascript:void(0);"
                    :class="{ 'answering-num': questionItemIdx == index }"
                    data-qid="2718025"
                  >
                    {{ index + 1 }}
                  </a>
                </li>
              </ul>
            </div>

            <link
              rel="stylesheet"
              href="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/main.entry(1).css"
            />
            <!-- <script
              type="text/javascript"
              crossorigin="anonymous"
              src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/main.entry.js.下载"
            ></script> -->
          </div>
          <input
            type="hidden"
            id="jsQuestionInfo"
            data-pid="43831164"
            data-tid="63829344"
            data-qid="2718042"
            data-total="22"
            data-left="22"
          />
        </div>

        <!-- <script
          type="text/javascript"
          crossorigin="anonymous"
          src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/main.entry.js(1).下载"
        ></script> -->

        <div class="fixed-menu" style="bottom: 220.5px">
          <div class="right-nav-bar">
            <div
              data-v-81bad520=""
              class="
                tw-w-10
                tw-fixed
                tw-right-2.5
                tw-rounded-t-lg
                tw-rounded-bl-lg
                tw-shadow-sm
                tw-bg-white
                tw-z-[999]
                tw-bottom-[225px]
              "
            >
              <!---->
              <a
                data-v-81bad520=""
                href="https://www.weibo.com/nowcoder"
                target="_blank"
                class="button-style tw-mb-2"
                ><span
                  data-v-6acb0236=""
                  data-v-81bad520=""
                  tagname="span"
                  class="ncicon ncicon-bleed"
                  aria-label="Weibo001"
                  ><svg
                    data-v-6acb0236=""
                    focusable="false"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="nonzero"
                      d="M821.7259 471c-1.2483 0-2.4966-.0591-3.7449-.4139-8.8569-1.951-14.5039-10.7605-12.5423-19.6882 10.4024-45.939 6.1226-78.5163-12.6017-96.7855-30.9693-30.2713-93.7401-15.6678-94.3345-15.4904-8.9758 2.1876-17.9515-3.311-20.032-12.1204-2.14-8.8685 3.2099-17.737 12.1856-19.9247 3.3288-.8277 81.1979-19.156 125.3039 23.886 27.4622 26.8422 34.833 69.7069 21.7558 127.589-1.605 7.7452-8.4408 12.9481-15.99 12.9481zm108.1687 46c-1.2483 0-2.3778-.1187-3.6855-.2968-12.0076-2.018-20.1514-13.4142-18.1897-25.3445 18.6058-112.2995 3.5666-190.9447-44.761-233.9177-74.5422-66.1213-207.6957-28.5497-209.0629-28.1936-11.6509 3.3833-23.8963-3.3832-27.344-15.0168-3.3288-11.6335 3.3883-23.8606 15.1581-27.3626 6.301-1.8993 157.5253-44.813 250.5545 37.453 60.5729 53.6568 80.4865 145.8943 59.1463 274.1603C949.8676 509.3433 940.535 517 929.8946 517zm-201.7149-.7757s91.4714-217.9035-213.5519-109.3378c9.6692-114.5048-39.9817-183.9916-188.8748-99.3602 0 0-483.7544 328.3697-130.9192 538.1367 0 0 443.7134 183.5165 645.0454-157.3252 39.9224-122.76-78.599-173.9546-111.6995-172.1135zm-285.458 329.1438c-146.7376 16.7842-274.792-48.4546-285.9426-145.8975-11.1506-97.4429 98.695-190.0225 245.4326-206.8066 146.797-16.9028 274.8513 48.3952 286.002 145.7788 11.2099 97.3836-98.7543 190.0819-245.492 206.9253zm104.8594-175.8395c-6.0667-66.6985-75.2978-115.0015-154.5805-107.8213-79.2827 7.1802-138.6407 66.9952-132.574 133.753 6.0666 66.7579 75.2382 115.0609 154.521 107.8214 79.3422-7.1209 138.6406-67.0546 132.6335-133.753zM360.4702 755C335.9432 755 316 736.41 316 713.5298 316 690.6497 335.9431 672 360.4702 672 385.1164 672 405 690.6497 405 713.5298 405 736.4099 385.0569 755 360.4702 755zM436.5 685C425.7313 685 417 676.3269 417 665.5582 417 654.7313 425.7313 646 436.4999 646 447.2684 646 456 654.7313 456 665.5582 456.058 676.2687 447.2684 685 436.4999 685z"
                    ></path></svg></span
              ></a>
              <span data-v-81bad520="">
                <div
                  role="tooltip"
                  id="el-popover-8998"
                  aria-hidden="true"
                  class="el-popover el-popper"
                  tabindex="0"
                  style="width: 151px; display: none"
                >
                  <!---->
                  <div data-v-81bad520="" class="tw-p-3 tw-box-border">
                    <div data-v-81bad520="" class="tw-mb-2 tw-text-center">
                      <img
                        data-v-81bad520=""
                        width="90"
                        height="90"
                        src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/59_1534321710941_41A541F87AE349E1D829B1B0B95C955D.png"
                      />
                    </div>
                    <div
                      data-v-81bad520=""
                      class="
                        tw-text-size-caption tw-text-gray-700 tw-text-center
                      "
                    >
                      扫描二维码，进入QQ群
                    </div>
                  </div>
                </div>
                <span class="el-popover__reference-wrapper"
                  ><span
                    data-v-81bad520=""
                    class="button-style tw-mb-2 el-popover__reference"
                    aria-describedby="el-popover-8998"
                    tabindex="0"
                    ><span
                      data-v-6acb0236=""
                      data-v-81bad520=""
                      tagname="span"
                      class="ncicon ncicon-bleed"
                      aria-label="QQ001"
                      ><svg
                        data-v-6acb0236=""
                        focusable="false"
                        viewBox="0 0 1019 1024"
                        fill="currentColor"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="nonzero"
                          d="M874.8888 647.0475c-16.8426-97.8152-87.498-161.901-87.498-161.901 10.0747-88.7987-26.9174-104.5612-26.9174-104.5612-7.782-274.7512-243.8877-269.9673-248.87-269.835-4.9822-.1323-241.132-4.9162-248.8699 269.835 0 0-37.0141 15.7625-26.9394 104.5611 0 0-70.6554 64.0859-87.476 161.901 0 0-8.9945 165.274 80.7742 20.2377 0 0 20.1935 55.0914 57.1856 104.5611 0 0-66.1801 22.5083-60.5365 80.9506 0 0-2.2927 65.188 141.3107 60.7129 0 0 100.9236-7.8482 131.236-50.5941h26.6969c30.2903 42.7239 131.214 50.594 131.214 50.594 143.5593 4.4753 141.3106-60.7128 141.3106-60.7128 5.5995-58.4423-60.5365-80.9506-60.5365-80.9506 36.992-49.4697 57.1856-104.561 57.1856-104.561 89.6805 145.0363 80.7301-20.2377 80.7301-20.2377z"
                        ></path></svg></span></span
                ></span>
              </span>
              <span data-v-81bad520="">
                <div
                  role="tooltip"
                  id="el-popover-8083"
                  aria-hidden="true"
                  class="el-popover el-popper"
                  tabindex="0"
                  style="width: 151px; display: none"
                >
                  <!---->
                  <div data-v-81bad520="" class="tw-p-3 tw-box-border">
                    <div data-v-81bad520="" class="tw-mb-2 tw-text-center">
                      <img
                        data-v-81bad520=""
                        width="90"
                        height="90"
                        src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1646799945943MMDZY.png"
                      />
                    </div>
                    <div
                      data-v-81bad520=""
                      class="
                        tw-text-size-caption tw-text-gray-700 tw-text-center
                      "
                    >
                      扫描二维码，关注牛客公众号
                    </div>
                  </div>
                </div>
                <span class="el-popover__reference-wrapper"
                  ><span
                    data-v-81bad520=""
                    class="button-style tw-mb-2 el-popover__reference"
                    aria-describedby="el-popover-8083"
                    tabindex="0"
                    ><span
                      data-v-6acb0236=""
                      data-v-81bad520=""
                      tagname="span"
                      class="ncicon ncicon-bleed"
                      aria-label="Weixin001"
                      ><svg
                        data-v-6acb0236=""
                        focusable="false"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="nonzero"
                          d="M670.4215 368.3475c10.286 0 20.4043.7823 30.5785 1.9C673.6079 242.722 537.2623 148 381.5745 148 207.5508 148 65 266.5283 65 417.1335c0 86.8984 47.4051 158.2613 126.6745 213.6974L160.0338 726l110.6865-55.4361c39.5788 7.7677 71.3313 15.815 110.8542 15.815 9.9506 0 19.7894-.4472 29.5164-1.1736-6.1493-21.1798-9.783-43.3095-9.783-66.3893.056-138.255 118.7924-250.4685 269.1136-250.4685zM499.4089 283C523.3087 283 539 298.6883 539 322.472 539 346.1443 523.3087 362 499.4089 362 475.7882 362 452 346.1442 452 322.472 452 298.6326 475.7323 283 499.4089 283zm-220.291 79C255.1436 362 231 346.1442 231 322.472 231 298.6884 255.1436 283 279.118 283 303.0922 283 319 298.6325 319 322.472 319 346.1443 303.0923 362 279.118 362zM959 614.6027C959 488.095 832.3657 385 690.1397 385 539.531 385 421 488.1508 421 614.6027c0 126.843 118.5869 229.6027 269.1397 229.6027 31.5189 0 63.3171-7.8788 94.9478-15.8135L871.876 876l-23.8068-79.1232C911.61 749.1568 959 685.9588 959 614.6028zM602.5184 575C586.8706 575 571 559.417 571 543.5c0-15.6943 15.8706-31.5 31.5184-31.5C626.4635 512 642 527.8057 642 543.5c0 15.917-15.5365 31.5-39.4816 31.5zm174.907 0C761.8521 575 746 559.417 746 543.5c0-15.6943 15.7964-31.5 31.4253-31.5C801.2036 512 817 527.8057 817 543.5c0 15.917-15.7964 31.5-39.5747 31.5z"
                        ></path></svg></span></span
                ></span>
              </span>
              <a
                data-v-81bad520=""
                href="https://www.nowcoder.com/app"
                target="_blank"
                class="el-tooltip button-style tw-mb-2"
                aria-describedby="el-tooltip-9996"
                tabindex="0"
                ><span
                  data-v-6acb0236=""
                  data-v-81bad520=""
                  tagname="span"
                  class="ncicon ncicon-bleed"
                  aria-label="Xiazaiapp001"
                  ><svg
                    data-v-6acb0236=""
                    focusable="false"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path
                        d="M815 584H209c-26.5097 0-48 21.4903-48 48v238.2857C161 918.2337 198.925 958 246.875 958h530.25C825.0755 958 863 918.2338 863 870.2857V632c0-26.5097-21.4903-48-48-48zm-48 96v182H257V680h510z"
                      ></path>
                      <path
                        d="M777.125 66c47.508 0 85.1162 39.0661 85.8637 86.409l.0113 1.4372V632h-96V162H257v470h-96V153.8462c0-47.507 37.1336-87.0482 84.4384-87.8343L246.875 66h530.25zM550 739c17.6731 0 32 14.3269 32 32 0 17.4964-14.0418 31.7131-31.4708 31.9957L550 803h-75c-17.6731 0-32-14.3269-32-32 0-17.4964 14.0418-31.7131 31.4708-31.9957L475 739h75z"
                      ></path>
                    </g></svg></span
              ></a>
              <span
                data-v-81bad520=""
                class="el-tooltip button-style"
                aria-describedby="el-tooltip-9990"
                tabindex="0"
                ><span
                  data-v-6acb0236=""
                  data-v-81bad520=""
                  tagname="span"
                  class="ncicon ncicon-bleed"
                  aria-label="Fankui001"
                  ><svg
                    data-v-6acb0236=""
                    focusable="false"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="96"
                        d="M861 424.75v352.49c0 46.2594-37.5006 83.76-83.76 83.76H246.76c-46.2594 0-83.76-37.5006-83.76-83.76V246.76c0-46.2594 37.5006-83.76 83.76-83.76H512M632.25 391.75 678 346l183-183"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M305 557h75c17.6731 0 32 14.3269 32 32 0 17.6731-14.3269 32-32 32h-75c-17.6731 0-32-14.3269-32-32 0-17.6731 14.3269-32 32-32z"
                      ></path>
                      <rect
                        width="305"
                        height="64"
                        x="273"
                        y="685"
                        fill="currentColor"
                        rx="32"
                      ></rect>
                    </g></svg></span
              ></span>
              <div data-v-81bad520="" class="divider"></div>
              <div
                data-v-81bad520=""
                class="button-style"
                style="padding-bottom: 8px"
              >
                <img
                  data-v-81bad520=""
                  src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1658127497180BNMEU.png"
                  style="width: 20px; height: 20px"
                />
              </div>
            </div>
            <!---->
          </div>
        </div>

        <div class="ft-wrap js-nowcoder-footer">
          <div data-v-462fe678="" class="tw-w-full tw-bg-[#282828]">
            <footer data-v-462fe678="" class="tw-w-1200 tw-mx-auto">
              <div
                data-v-462fe678=""
                class="
                  tw-py-11
                  tw-flex
                  tw-justify-between
                  tw-border-b-1
                  tw-border-t-1
                  tw-border-transparent
                  tw-border-gray-800
                  tw-items-center
                "
              >
                <ul
                  data-v-462fe678=""
                  class="tw-flex tw-h-5.5 tw-pl-0 tw-items-center"
                >
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <span data-v-462fe678="">
                      <div
                        role="tooltip"
                        id="el-popover-49"
                        aria-hidden="true"
                        class="el-popover el-popper"
                        tabindex="0"
                        style="width: 234px; display: none"
                      >
                        <!---->
                        <div data-v-462fe678="" class="tw-p-3 tw-box-border">
                          <div
                            data-v-462fe678=""
                            class="
                              tw-text-size-base tw-text-gray-800 tw-text-center
                            "
                          >
                            刷真题、补算法、看面经、得内推
                          </div>
                          <div
                            data-v-462fe678=""
                            class="tw-mt-3 tw-mb-2 tw-text-center"
                          >
                            <img
                              data-v-462fe678=""
                              width="90"
                              height="90"
                              src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/app_download.png"
                            />
                          </div>
                          <div
                            data-v-462fe678=""
                            class="
                              tw-text-size-caption-pure
                              tw-text-gray-700
                              tw-text-center
                            "
                          >
                            扫一扫，把题目装进口袋
                          </div>
                        </div>
                      </div>
                      <span class="el-popover__reference-wrapper">
                        <div
                          data-v-462fe678=""
                          class="
                            tw-text-size-base-pure
                            tw-h-5.5
                            tw-flex
                            tw-items-center
                            font-color
                            tw-cursor-pointer
                            el-popover__reference
                          "
                          aria-describedby="el-popover-49"
                          tabindex="0"
                        >
                          <span
                            data-v-6acb0236=""
                            data-v-462fe678=""
                            tagname="span"
                            class="ncicon tw-mr-1 ncicon-bleed"
                            aria-label="Xiazaiapp001"
                            ><svg
                              data-v-6acb0236=""
                              focusable="false"
                              viewBox="0 0 1024 1024"
                              fill="currentColor"
                              width="22"
                              height="22"
                              aria-hidden="true"
                            >
                              <g fill="currentColor" fill-rule="nonzero">
                                <path
                                  d="M815 584H209c-26.5097 0-48 21.4903-48 48v238.2857C161 918.2337 198.925 958 246.875 958h530.25C825.0755 958 863 918.2338 863 870.2857V632c0-26.5097-21.4903-48-48-48zm-48 96v182H257V680h510z"
                                ></path>
                                <path
                                  d="M777.125 66c47.508 0 85.1162 39.0661 85.8637 86.409l.0113 1.4372V632h-96V162H257v470h-96V153.8462c0-47.507 37.1336-87.0482 84.4384-87.8343L246.875 66h530.25zM550 739c17.6731 0 32 14.3269 32 32 0 17.4964-14.0418 31.7131-31.4708 31.9957L550 803h-75c-17.6731 0-32-14.3269-32-32 0-17.4964 14.0418-31.7131 31.4708-31.9957L475 739h75z"
                                ></path>
                              </g></svg></span
                          >移动版
                        </div>
                      </span>
                    </span>
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/nowcoder/about"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >关于我们</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/nowcoder/recruitment"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >加入我们</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="javascript:void(0);"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >意见反馈</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://hr.nowcoder.com/"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >企业服务</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/nowcoder/school-cooperation"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >校企合作</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/html/cooperation"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >联系我们</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/html/disclaimer"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >免责声明</a
                    >
                  </li>
                  <li data-v-462fe678="" class="tw-mr-7.5">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/html/links"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >友情链接</a
                    >
                  </li>
                  <li data-v-462fe678="">
                    <a
                      data-v-462fe678=""
                      href="https://www.nowcoder.com/home/resourcemap"
                      class="tw-text-size-base-pure hover:tw-text-gray-500"
                      >资源导航</a
                    >
                  </li>
                </ul>
                <div
                  data-v-462fe678=""
                  class="tw-flex tw-items-center"
                  style="color: rgb(102, 102, 102)"
                >
                  <span data-v-462fe678="">
                    <div
                      role="tooltip"
                      id="el-popover-2755"
                      aria-hidden="true"
                      class="el-popover el-popper"
                      tabindex="0"
                      style="width: 151px; display: none"
                    >
                      <!---->
                      <div data-v-462fe678="" class="tw-p-3 tw-box-border">
                        <div data-v-462fe678="" class="tw-mb-2 tw-text-center">
                          <img
                            data-v-462fe678=""
                            width="90"
                            height="90"
                            src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/59_1534321710941_41A541F87AE349E1D829B1B0B95C955D.png"
                          />
                        </div>
                        <div
                          data-v-462fe678=""
                          class="
                            tw-text-size-caption tw-text-gray-700 tw-text-center
                          "
                        >
                          扫描二维码，进入QQ群
                        </div>
                      </div>
                    </div>
                    <span class="el-popover__reference-wrapper"
                      ><span
                        data-v-462fe678=""
                        class="
                          tw-cursor-pointer tw-mr-7.5
                          hover:tw-text-gray-500
                          el-popover__reference
                        "
                        aria-describedby="el-popover-2755"
                        tabindex="0"
                        ><span
                          data-v-6acb0236=""
                          data-v-462fe678=""
                          tagname="span"
                          class="ncicon ncicon-bleed"
                          aria-label="QQ001"
                          ><svg
                            data-v-6acb0236=""
                            focusable="false"
                            viewBox="0 0 1019 1024"
                            fill="currentColor"
                            width="22"
                            height="22"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="nonzero"
                              d="M874.8888 647.0475c-16.8426-97.8152-87.498-161.901-87.498-161.901 10.0747-88.7987-26.9174-104.5612-26.9174-104.5612-7.782-274.7512-243.8877-269.9673-248.87-269.835-4.9822-.1323-241.132-4.9162-248.8699 269.835 0 0-37.0141 15.7625-26.9394 104.5611 0 0-70.6554 64.0859-87.476 161.901 0 0-8.9945 165.274 80.7742 20.2377 0 0 20.1935 55.0914 57.1856 104.5611 0 0-66.1801 22.5083-60.5365 80.9506 0 0-2.2927 65.188 141.3107 60.7129 0 0 100.9236-7.8482 131.236-50.5941h26.6969c30.2903 42.7239 131.214 50.594 131.214 50.594 143.5593 4.4753 141.3106-60.7128 141.3106-60.7128 5.5995-58.4423-60.5365-80.9506-60.5365-80.9506 36.992-49.4697 57.1856-104.561 57.1856-104.561 89.6805 145.0363 80.7301-20.2377 80.7301-20.2377z"
                            ></path></svg></span></span
                    ></span>
                  </span>
                  <span data-v-462fe678="">
                    <div
                      role="tooltip"
                      id="el-popover-7990"
                      aria-hidden="true"
                      class="el-popover el-popper"
                      tabindex="0"
                      style="width: 151px; display: none"
                    >
                      <!---->
                      <div data-v-462fe678="" class="tw-p-3 tw-box-border">
                        <div data-v-462fe678="" class="tw-mb-2 tw-text-center">
                          <img
                            data-v-462fe678=""
                            width="90"
                            height="90"
                            src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1657164410523CWJXY.png"
                          />
                        </div>
                        <div
                          data-v-462fe678=""
                          class="
                            tw-text-size-caption tw-text-gray-700 tw-text-center
                          "
                        >
                          扫描二维码，关注牛客公众号
                        </div>
                      </div>
                    </div>
                    <span class="el-popover__reference-wrapper"
                      ><span
                        data-v-462fe678=""
                        class="
                          tw-cursor-pointer tw-mr-7.5
                          hover:tw-text-gray-500
                          el-popover__reference
                        "
                        aria-describedby="el-popover-7990"
                        tabindex="0"
                        ><span
                          data-v-6acb0236=""
                          data-v-462fe678=""
                          tagname="span"
                          class="ncicon ncicon-bleed"
                          aria-label="Weixin001"
                          ><svg
                            data-v-6acb0236=""
                            focusable="false"
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            width="22"
                            height="22"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="nonzero"
                              d="M670.4215 368.3475c10.286 0 20.4043.7823 30.5785 1.9C673.6079 242.722 537.2623 148 381.5745 148 207.5508 148 65 266.5283 65 417.1335c0 86.8984 47.4051 158.2613 126.6745 213.6974L160.0338 726l110.6865-55.4361c39.5788 7.7677 71.3313 15.815 110.8542 15.815 9.9506 0 19.7894-.4472 29.5164-1.1736-6.1493-21.1798-9.783-43.3095-9.783-66.3893.056-138.255 118.7924-250.4685 269.1136-250.4685zM499.4089 283C523.3087 283 539 298.6883 539 322.472 539 346.1443 523.3087 362 499.4089 362 475.7882 362 452 346.1442 452 322.472 452 298.6326 475.7323 283 499.4089 283zm-220.291 79C255.1436 362 231 346.1442 231 322.472 231 298.6884 255.1436 283 279.118 283 303.0922 283 319 298.6325 319 322.472 319 346.1443 303.0923 362 279.118 362zM959 614.6027C959 488.095 832.3657 385 690.1397 385 539.531 385 421 488.1508 421 614.6027c0 126.843 118.5869 229.6027 269.1397 229.6027 31.5189 0 63.3171-7.8788 94.9478-15.8135L871.876 876l-23.8068-79.1232C911.61 749.1568 959 685.9588 959 614.6028zM602.5184 575C586.8706 575 571 559.417 571 543.5c0-15.6943 15.8706-31.5 31.5184-31.5C626.4635 512 642 527.8057 642 543.5c0 15.917-15.5365 31.5-39.4816 31.5zm174.907 0C761.8521 575 746 559.417 746 543.5c0-15.6943 15.7964-31.5 31.4253-31.5C801.2036 512 817 527.8057 817 543.5c0 15.917-15.7964 31.5-39.5747 31.5z"
                            ></path></svg></span></span
                    ></span>
                  </span>
                  <a
                    data-v-462fe678=""
                    href="https://weibo.com/nowcoder"
                    target="_blank"
                    class="tw-mr-7.5 hover:tw-text-gray-500"
                    style="color: rgb(102, 102, 102)"
                    ><span
                      data-v-6acb0236=""
                      data-v-462fe678=""
                      tagname="span"
                      class="ncicon ncicon-bleed"
                      aria-label="Weibo001"
                      ><svg
                        data-v-6acb0236=""
                        focusable="false"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="22"
                        height="22"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="nonzero"
                          d="M821.7259 471c-1.2483 0-2.4966-.0591-3.7449-.4139-8.8569-1.951-14.5039-10.7605-12.5423-19.6882 10.4024-45.939 6.1226-78.5163-12.6017-96.7855-30.9693-30.2713-93.7401-15.6678-94.3345-15.4904-8.9758 2.1876-17.9515-3.311-20.032-12.1204-2.14-8.8685 3.2099-17.737 12.1856-19.9247 3.3288-.8277 81.1979-19.156 125.3039 23.886 27.4622 26.8422 34.833 69.7069 21.7558 127.589-1.605 7.7452-8.4408 12.9481-15.99 12.9481zm108.1687 46c-1.2483 0-2.3778-.1187-3.6855-.2968-12.0076-2.018-20.1514-13.4142-18.1897-25.3445 18.6058-112.2995 3.5666-190.9447-44.761-233.9177-74.5422-66.1213-207.6957-28.5497-209.0629-28.1936-11.6509 3.3833-23.8963-3.3832-27.344-15.0168-3.3288-11.6335 3.3883-23.8606 15.1581-27.3626 6.301-1.8993 157.5253-44.813 250.5545 37.453 60.5729 53.6568 80.4865 145.8943 59.1463 274.1603C949.8676 509.3433 940.535 517 929.8946 517zm-201.7149-.7757s91.4714-217.9035-213.5519-109.3378c9.6692-114.5048-39.9817-183.9916-188.8748-99.3602 0 0-483.7544 328.3697-130.9192 538.1367 0 0 443.7134 183.5165 645.0454-157.3252 39.9224-122.76-78.599-173.9546-111.6995-172.1135zm-285.458 329.1438c-146.7376 16.7842-274.792-48.4546-285.9426-145.8975-11.1506-97.4429 98.695-190.0225 245.4326-206.8066 146.797-16.9028 274.8513 48.3952 286.002 145.7788 11.2099 97.3836-98.7543 190.0819-245.492 206.9253zm104.8594-175.8395c-6.0667-66.6985-75.2978-115.0015-154.5805-107.8213-79.2827 7.1802-138.6407 66.9952-132.574 133.753 6.0666 66.7579 75.2382 115.0609 154.521 107.8214 79.3422-7.1209 138.6406-67.0546 132.6335-133.753zM360.4702 755C335.9432 755 316 736.41 316 713.5298 316 690.6497 335.9431 672 360.4702 672 385.1164 672 405 690.6497 405 713.5298 405 736.4099 385.0569 755 360.4702 755zM436.5 685C425.7313 685 417 676.3269 417 665.5582 417 654.7313 425.7313 646 436.4999 646 447.2684 646 456 654.7313 456 665.5582 456.058 676.2687 447.2684 685 436.4999 685z"
                        ></path></svg></span
                  ></a>
                  <a
                    data-v-462fe678=""
                    href="https://www.zhihu.com/org/niu-ke-wang-53"
                    target="_blank"
                    class="hover:tw-text-gray-500"
                    style="color: rgb(102, 102, 102)"
                    ><span
                      data-v-6acb0236=""
                      data-v-462fe678=""
                      tagname="span"
                      class="ncicon ncicon-bleed"
                      aria-label="Zhihu001"
                      ><svg
                        data-v-6acb0236=""
                        focusable="false"
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        width="22"
                        height="22"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M816 115c53.0193 0 96 42.9807 96 96v608c0 53.0193-42.9807 96-96 96H208c-53.0193 0-96-42.9807-96-96V211c0-53.0193 42.9807-96 96-96h608zM375.2885 256s-38.641 2.1455-52.594 26.8032c-13.953 24.6578-57.9607 147.9557-57.9607 147.9557s.1217.0522.3612.1337l.1771.0585c2.8846.9247 17.2045 4.236 39.1752-11.985 24.6874-18.2254 33.2733-50.3915 33.2733-50.3915l45.0807-2.1455 1.073 130.801s-23.7018-.3241-47.7122-.4376l-2.6195-.0115c-18.765-.0762-37.1988-.0117-44.122.4492-16.1004 1.0719-24.6874 43.9584-24.6874 43.9584h119.143s-10.735 72.9049-40.7873 125.4406C311.9607 719.1638 254 760.9762 254 760.9762s41.8603 17.154 82.6493-6.433c40.7872-24.6595 70.8417-130.8012 70.8417-130.8012l95.5293 119.0082s8.5864-56.8226-1.0731-72.9048c-10.735-16.0822-66.5489-80.4097-66.5489-80.4097l-24.6874 21.4416 17.1735-70.7617H532l-.0006-.1106c-.0178-2.3613-.6112-41.7655-20.3933-43.8467-20.3939-2.1455-83.7212 0-83.7212 0V367.5021h94.4538s-1.073-42.886-19.3208-42.886H349.5286L375.2886 256zM771 321H556.0743L555 707.7859h38.6866L607.656 756l67.7022-48.2141H771V321zm-42 44v300.0616h-45.2039L626.7537 709l-12.9152-43.9384H602V365h127z"
                        ></path></svg></span
                  ></a>
                </div>
              </div>
              <div data-v-462fe678="" class="tw-py-8">
                <div data-v-462fe678="" class="tw-h-3 tw-mb-5 tw-flex">
                  <div data-v-462fe678="" class="bottom-text tw-border-none">
                    公司地址：北京市朝阳区北苑路北美国际商务中心K2座一层-北京牛客科技有限公司
                  </div>
                  <div data-v-462fe678="" class="bottom-text tw-pl-7.5">
                    联系方式：010-60728802
                  </div>
                  <div data-v-462fe678="" class="bottom-text tw-pl-7.5">
                    投诉举报电话：010-57596212（朝阳人力社保局）
                  </div>
                </div>
                <div data-v-462fe678="" class="tw-h-3 tw-flex">
                  <div data-v-462fe678="" class="bottom-text tw-border-none">
                    牛客科技©2022 All rights reserved
                    <a
                      data-v-462fe678=""
                      href="mailto:admin@nowcoder.com"
                      style="color: inherit"
                      >admin@nowcoder.com</a
                    >
                  </div>
                  <a
                    data-v-462fe678=""
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    class="bottom-text tw-pl-6"
                    >京ICP备14055008号-4</a
                  >
                  <a
                    data-v-462fe678=""
                    href="https://uploadfiles.nowcoder.com/acts/icp.png"
                    target="_blank"
                    class="bottom-text tw-pl-6"
                    >增值电信业务经营许可证</a
                  >
                  <a
                    data-v-462fe678=""
                    href="https://static.nowcoder.com/protocol/license-center.html#business"
                    target="_blank"
                    class="bottom-text tw-pl-6"
                    >营业执照</a
                  >
                  <a
                    data-v-462fe678=""
                    href="https://static.nowcoder.com/protocol/license-center.html#human-resources"
                    target="_blank"
                    class="bottom-text tw-pl-6"
                    >人力资源服务许可证</a
                  >
                  <a
                    data-v-462fe678=""
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502036488"
                    target="_blank"
                    class="bottom-text tw-pl-6 tw-flex tw-items-center !tw-pr-0"
                    ><img
                      data-v-462fe678=""
                      width="14"
                      height="14"
                      src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/1637234087517BBAYE.png"
                      class="tw-mr-1"
                    />京公网安备 11010502036488号
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <div data-v-76b0d96b="" class="LiveBroadCast">
          <div data-v-76b0d96b="" style="position: relative">
            <!---->
            <!---->
            <span
              data-v-6acb0236=""
              data-v-76b0d96b=""
              tagname="span"
              class="ncicon closeIcon ncicon-bleed"
              aria-label="Guanbi001"
              ><svg
                data-v-6acb0236=""
                focusable="false"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                width="14"
                height="14"
                aria-hidden="true"
              >
                <g fill="currentColor" fill-rule="nonzero">
                  <path
                    d="M830.0108 126.107c18.7185-18.7717 49.1104-18.8148 67.8821-.0962 18.584 18.5313 18.8122 48.5037.6523 67.3155l-.556.5666-329.3405 330.2762c-30.8856 30.9733-80.8396 31.3535-112.1926 1.087l-1.1048-1.087-329.3405-330.2762c-18.7186-18.7717-18.6755-49.1636.0963-67.8821 18.584-18.5314 48.5569-18.6745 67.3171-.4613l.565.5576L512 445.021l318.0108-318.914z"
                  ></path>
                  <path
                    d="M830.0108 884.5738c18.7185 18.7717 49.1104 18.8148 67.8821.0963 18.584-18.5314 18.8122-48.5038.6523-67.3156l-.556-.5666-329.3405-330.2761c-30.8856-30.9734-80.8396-31.3536-112.1926-1.087l-1.1048 1.087-329.3405 330.276c-18.7186 18.7718-18.6755 49.1637.0963 67.8823 18.584 18.5313 48.5569 18.6744 67.3171.4612l.565-.5575L512 565.6598l318.0108 318.914z"
                  ></path>
                </g></svg
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div id="waf_nc_block" style="display: none">
      <div class="waf-nc-mask"></div>
      <div id="WAF_NC_WRAPPER" class="waf-nc-wrapper">
        <img
          class="waf-nc-icon"
          src="@/assets/对n个互不相同的符号进行哈夫曼编码。若生成的哈夫曼树共有35个结点，则n的值是：_中兴软件类笔试试卷A_牛客网_files/robot.png"
          alt=""
          height="111"
          width="150"
        />
        <p class="waf-nc-description">为保证您的正常访问，请进行如下验证：</p>
        <div id="nocaptcha"></div>
      </div>
    </div>
    <div
      id="jlzsCpn_0_component_0"
      class="jlzs-container jlzs-gate"
      style="width: auto; height: 693px"
    ></div>

    <!-- autoplay="autoplay" -->
    <!-- video load  -->
    <!-- <video
      src="http://139.196.8.79/images/7-1%20%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E5%BC%80%E5%8F%91%E6%98%AF%E4%BB%80%E4%B9%88.mp4"
      :controls="videoOptions.controls"
      class="video-js vjs-big-play-centered vjs-fluid"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-playsinline
      style="width: 100%"
      @play="onPlayerPlay"
      @pause="onPlayerPause"
      @seeking="seeking"
      ref="video"
    ></video> -->

    <!-- <video
        ref="myVideo"
        :poster="poster"
        :src="src"
        :controls="controls"
        oncontextmenu="return false"
        @timeupdate="timeupdate"
        controlslist="nodownload"
        class="video-box"
      ></video> -->
    <!-- ————————————————
版权声明：本文为CSDN博主「BradyCC」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/bradycc/article/details/106434961 -->

    <!-- tw-w-10 -->
    <!-- tw-w-400 -->
    <div
      data-v-106c86ed=""
      data-v-81bad520=""
      class="
        tw-w-200
        tw-fixed
        tw-right-2.5
        tw-rounded-t-lg
        tw-rounded-bl-lg
        tw-shadow-sm
        tw-bg-white
        tw-z-[999]
        tw-bottom-[225px]
      "
    >
      <!-- width="400" height="300" -->
      <video ref="video" autoplay width="100" height="100"></video>
    </div>

    <button @click="btnTakePhotoClicked()">Take photo</button>
    <canvas ref="canvas" width="400" height="300"></canvas>

    <a href="" download="canvas.jpeg" id="save_herf">
      <img src="" id="save_img" alt="" />
    </a>

    <el-button type="" @click="stopVideo">stopVideo</el-button>
    <el-row class="do-exam-title">
      <el-button type="primary" @click="goBack">goBack</el-button>

      <el-col :span="24">
        <span :key="item.itemOrder" v-for="item in answer.answerItems">
          <el-tag
            :type="questionCompleted(item.completed)"
            class="do-exam-title-tag"
            @click="goAnchor('#question-' + item.itemOrder)"
            >{{ item.itemOrder }}</el-tag
          >
        </span>
        <span class="do-exam-time">
          <label>剩余时间：</label>
          <label>{{ formatSeconds(remainTime) }}</label>
        </span>
      </el-col>
    </el-row>
    <el-row class="do-exam-title-hidden">
      <el-col :span="24">
        <span :key="item.itemOrder" v-for="item in answer.answerItems">
          <el-tag class="do-exam-title-tag">{{ item.itemOrder }}</el-tag>
        </span>
        <span class="do-exam-time">
          <label>剩余时间：</label>
        </span>
      </el-col>
    </el-row>
    <div class="app-item-contain">
      <!-- <el-container  class="app-item-contain"> -->
      <el-header class="align-center">
        <h1>{{ form.name }}</h1>
        <div>
          <span class="question-title-padding">试卷总分：{{ form.score }}</span>
          <span class="question-title-padding"
            >考试时间：{{ form.suggestTime }}分钟</span
          >

          <el-button type="" @click="drawIoShowingToggle"
            >drawIoShowingToggle</el-button
          >
        </div>
      </el-header>
      <el-main>
        <el-form
          :model="form"
          ref="form"
          v-loading="formLoading"
          label-width="100px"
        >
          <el-row :key="index" v-for="(titleItem, index) in form.titleItems">
            <h3>{{ titleItem.name }}</h3>
            <el-card
              class="exampaper-item-box"
              v-if="titleItem.questionItems.length !== 0"
            >
              <!-- <el-form-item  -->
              <!-- questionItemIdx -->

              <div
                :key="questionItem.itemOrder"
                :label="questionItem.itemOrder + '.'"
                v-for="questionItem in titleItem.questionItems"
                class="exam-question-item"
                label-width="50px"
                :id="'question-' + questionItem.itemOrder"
              >
                <QuestionEdit
                  :qType="questionItem.questionType"
                  :question="questionItem"
                  :answer="answer.answerItems[questionItem.itemOrder - 1]"
                />
                <!-- </el-form-item> -->
              </div>

              <!-- <div
                :key="questionItem.itemOrder"
                :label="questionItem.itemOrder + '.'"
                v-for="questionItem in titleItem.questionItems"
                class="exam-question-item"
                label-width="50px"
                :id="'question-' + questionItem.itemOrder"
              >
                <QuestionEdit
                  :qType="questionItem.questionType"
                  :question="questionItem"
                  :answer="answer.answerItems[questionItem.itemOrder - 1]"
                />
             
              </div> -->

              <!-- </el-form-item> -->
            </el-card>
          </el-row>

          <el-button type="" @click="drawIoShowingToggle"
            >drawIoShowingToggle</el-button
          >

          <el-row class="do-align-center">
            <!-- <el-button type="primary" @click="submitForm">提交</el-button> -->
            <el-button type="primary" @click="submitFormConfirm"
              >提交</el-button
            >
            <el-button>取消</el-button>
          </el-row>
        </el-form>
      </el-main>
      <!-- </el-container> -->

      codemirror
      <codemirror
        ref="codemirrorCode"
        v-model="curCode"
        :options="cmOptions"
        class="code"
      >
      </codemirror>

      <!-- <textarea
        ref="mycode"
        class="codesql"
        v-model="code"
        style="height: 200px; width: 600px"
      ></textarea> -->
      <JavaScriptDemoVue></JavaScriptDemoVue>
      <!-- width="2000px" -->
      <el-dialog title="" width="1400px" :visible.sync="drawIoShowing">
        <DrawIo
          @saveDrawBack="saveDrawBack"
          :drawIo="questionItem.drawIo"
        ></DrawIo>
      </el-dialog>

      <el-dialog title="" width="1400px" :visible.sync="iframeDocShowing">
        <iframe
          ref="myframe"
          id="myframe"
          class="iframeDoc"
          rameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          allowtransparency="yes"
       
          :src="docUrl"
        ></iframe>
        <!-- src="http://43.142.150.223:2301" -->
        <!-- src="http://localhost:3001" -->
        <!-- http://43.142.150.223:2323 -->
        <!-- 2301 -->
        <!-- src="http://43.142.150.223:2323" -->
        <!-- src="http://localhost:3001" -->
        <!-- 2301 drawio -->
      </el-dialog>

      <el-dialog
      top="10px"
      class="dialogG6Editor"
      :visible.sync="dialogVisibleEditorG6Code"
      append-to-body
      :close-on-click-modal="false"
      width="1300px"
      height="1200px"
      :show-close="false"
      center
    >
   
      <G6Tree @onClose="onCloseG6Tree" 
      
      @onCloseNotSave="onCloseNotSaveG6Tree" 
      @exportData="exportData" :data="drawIoStr"></G6Tree>
    </el-dialog>
    <!-- drawIoStr -->
    <!-- :data="answer.answerItems[questionItemIdx].drawIo" -->

    <el-button type="" @click="toSetDrawPageG6Editor">用编辑器设计流程图</el-button>


    </div>
  </div>
</template>

<script>
// import "codemirror/theme/ambiance.css";
//   import "codemirror/lib/codemirror.css";
//   import "codemirror/addon/hint/show-hint.css";

//   let CodeMirror = require("codemirror/lib/codemirror");
//   require("codemirror/addon/edit/matchbrackets");
//   require("codemirror/addon/selection/active-line");
//   require("codemirror/mode/sql/sql");
//   require("codemirror/addon/hint/show-hint");
//   require("codemirror/addon/hint/sql-hint");

import eventBus from "@/utils/eventBus";
// import G6Editor from './components/G6Editor'
// import G6Editor from '@/components/G6Editor'
import G6Editor from '@/components/G6Editor/index'
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
// D:\proj\bishe\exam-vue-admin3\src\components\CodeMirrorEditorBlack.vue

let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
// D:\proj\bishe\exam-vue-student\src\views\G6TreeTest.vue

import G6 from "@antv/g6";
// D:\proj\bishe\exam-vue-admin3\src\utils\CodeMirrorUtil.js
import CodeMirrorUtil from "@/utils/CodeMirrorUtil";
import NodeUtil from "@/utils/NodeUtil";

import G6Util from "@/utils/G6Util";

// import {throttle} from "@/utils/throttle";
import {throttle} from "@/utils/tools";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml"; // xml编辑器模式
import "codemirror/theme/monokai.css"; // 主题

import { mapState, mapGetters } from "vuex";
import { formatSeconds } from "@/utils";
import QuestionEditNowCoder from "../components/QuestionEditNowCoder";
import QuestionEdit from "../components/QuestionEdit";
import DrawIo from "@/views/DrawIo";
import examPaperApi from "@/api/examPaper";
import examPaperAnswerApi from "@/api/examPaperAnswer";

// vue-codemirror  vue2
import { codemirror } from "vue-codemirror";
import "codemirror/theme/liquibyte.css"; //导入选中的theme主题,与初始化theme配置一致
// import "codemirror/addon/hint/show-hint.css"; //导入自动提示核心样式

import "codemirror/mode/sql/sql.js"; //导入使用的语言语法定义文件，初始化mode配置一致
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/hint/show-hint.js"; //导入自动提示核心文件
import "codemirror/addon/hint/sql-hint.js"; //导入指定语言的提示文件

import "codemirror/mode/sql/sql.js";
// 主题css
import "codemirror/theme/solarized.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// closebrackets
import "codemirror/addon/edit/closebrackets.js";
import JavaScriptDemoVue from "../../JavaScriptDemo.vue";
// <!-- import { log } from "console"; -->

import common from "@/utils/common";
 
import ObjUtil from "@/utils/ObjUtil";
import G6Tree from "@/components/G6Tree";
// ————————————————
// 版权声明：本文为CSDN博主「啾酱」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_44818275/article/details/126142915

export default {
  components: {
    QuestionEdit,
    codemirror,
    JavaScriptDemoVue,
    QuestionEditNowCoder,
    DrawIo,
    G6Tree,
    G6Editor,
  },
  data() {
      
    // 43.142.150.223
    // let  docUrl="http://43.142.150.223:2301"
    let  docUrl="http://43.142.150.223:2323"

    return {
      dialogVisibleEditorG6Code:false,
      docUrl:docUrl,
      iframeWin:null,
      debug:true,
      // debug:false,
      drawIoShowing: false,
      iframeDocShowing: false,
      questionItemIdx: 0,
      questionItem: {},
      videoOptions: {
        controls: true,
        src: "xxxxxxx.mp4", // url地址
      },
      player: null,
      playTime: "",
      seekTime: "",
      current: "",

      _context2d: null,
      canvas: null,
      code: "#include<int></int>",
      curCode: "#include<int></int>",
      // cmOptions: {
      //   value: "#include<int></int>", //编辑器的起始值。可以是字符串，也可以是文档对象。
      //   // mode: "text/x-hive", //第一个将模式名称映射到它们的构造函数，第二个将MIME类型映射到模式规范。
      //   // mode: "sql",
      //   mode: 'text/x-mysql', // 选择代码语言，我这里选的sql

      //   theme: "liquibyte", //编辑器样式的主题
      //   indentWithTabs: true, //在缩进时，是否tabSize 应该用N个制表符替换前N *个空格。默认值为false。
      //   smartIndent: true, //是否使用模式提供的上下文相关缩进（或者只是缩进与之前的行相同）。默认为true。
      //   lineNumbers: true, //是否在编辑器左侧显示行号。
      //   matchBrackets: true, //括号匹配
      //   autofocus: true, //可用于使CodeMirror将焦点集中在初始化上
      //   extraKeys: { "Ctrl-Space": "autocomplete" }, //按键配置
      //   hintOptions: {
      //     tables: {
      //       users: ["name", "score", "birthDate"],
      //       countries: ["name", "population", "size"],
      //     },
      //   },
      // },

      mediaStreamTrack: null,
      cmOptions: {
        tabSize: 4, // tabsize默认为4
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: "text/x-mysql", // 选择代码语言，我这里选的sql
        extraKeys: { Ctrl: "autocomplete" }, //自动提示配置
        lineWrapping: true, // 自动换行
        theme: "solarized light", // 主题根据需要自行配置
      },
      // ————————————————
      // 版权声明：本文为CSDN博主「啾酱」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      // 原文链接：https://blog.csdn.net/qq_44818275/article/details/126142915

      titleItemIdx: 0,
      titleItem: {},
      form: {
        name: "nothing",
        score: 1,
        // suggestTime:"1分钟",
        suggestTime: 1,
        // rm.score}}</span>
        //   <span class="question-title-padding">考试时间：{{form.suggestTime}
      },
      formLoading: false,
      answer: {
        questionId: null,
        doTime: 0,
        answerItems: [],
      },
      timer: null,
      remainTime: 0,
      drawIoStr:null,
    };
  },
  created() {
    eventBus.$on('exportData', (data) => {
      console.log("data exportData emit")
      console.log(data)
    })
    // setTimeout(() => {
    //   this.$refs.codemirrorCode.refresh();
    // }, 1);
    // // 这样的确在组
    // let id = this.$route.query.id;
    // console.log("this.$route.query");
    // console.log(this.$route.query);
    // let _this = this;
    // if (id && parseInt(id) !== 0) {
    //   _this.formLoading = true;
    //   examPaperApi.select(id).then((re) => {
    //     console.log("re examPaperApi");
    //     console.log(re);
    //     _this.form = re.response;
    //     if (!_this.form) {
    //       _this.$message.error("没有数据  id " + id);
    //       // _this.$message.error(re.message)
    //       console.log("_this.    $router");
    //       console.log(_this.$router);
    //       // _this.    $router.back()
    //       _this.$router.go(-1);
    //       console.log("this.$router.go  func");
    //       console.log(this.$router.go);
    //       // this.history.go(-1);
    //       return;
    //     }
    //     _this.remainTime = re.response.suggestTime * 60;
    //     _this.initAnswer();
    //     _this.timeReduce();
    //     _this.formLoading = false;
    //   });
    // }
    // idnex.html
    // //获取iframe元素
    // let
    // iFrame = document.getElementById('myframe')
    // //iframe加载完毕后再发送消息，否则子页面接收不到message
    // iFrame.onload = function(){
    //   //iframe加载完立即发送一条消息
    //   iFrame.contentWindow.postMessage('MessageFromIndex1','*');
    // }
    // // iframePage.html
    // //回调函数
    // function receiveMessageFromIndex ( event ) {
    //   console.log( 'receiveMessage from  xioo-docs/ ', event )
    // }
    // //监听message事件
    // window.addEventListener("message", receiveMessageFromIndex, false);
  },
  mounted() {
    this.iframeMounted()
    this.initData();
    this.initVueApp();
    this.btnTakePhotoClicked();
    // this. drawIoStr=JSON.stringify(
    //   this.answer.answerItems[this.questionItemIdx].drawIo
    // )
  },

  beforeDestroy() {
    window.clearInterval(this.timer);
    this.stopVideo();
  },
  methods: {

    // exportData(data){
    //   console.log("data exportData")
    //   console.log(data)
    // },

    toSetDrawPageG6Editor(){
      this.dialogVisibleEditorG6Code=true
    },
    onCloseG6Tree(JsonCodeMirrorVal){
      // this.$emit('onClose',JsonCodeMirrorVal)

      console.log("JsonCodeMirrorVal onCloseG6Tree");
      console.log(JsonCodeMirrorVal);
      let  nowEditAns=
      this.answer.answerItems[this.questionItemIdx]
      nowEditAns.drawIo=JsonCodeMirrorVal
      // this.form.g6Tree=JsonCodeMirrorVal
      this.dialogVisibleEditorG6Code=false
    },
    onCloseNotSaveG6Tree(JsonCodeMirrorVal){
      this.dialogVisibleEditorG6Code=false
    },
    exportData(data) {
      console.log(data);
    },
    onClose() {
      // onClose
      // onClose
      this.richEditor.dialogVisibleEditor = false;
    },
    sendMegToIframe(data) {
      // 向iframe传值
      // console.log("this.$refs");
      // console.log(this.$refs);
      // const mapFrame = this.$refs['myframe'];
      // const iframeWin = mapFrame.contentWindow;
      // if(!this.iframeWin){

      //   this.mountIframeDoc()
      // }
      let iframeWin = this.iframeWin;
      // iframeWin.postMessage(
      //   // {
      //   //   value: 'backSuccess',
      //   //   id: 'vue',
      //   //   success: true
      //   // },
      //   data,
      //   "*"
      // );
      window.top.postMessage(
   data,
   "*"
 );

      // setTimeout(()=>{
      //   let iframeWin=  this.iframeWin
      // iframeWin.postMessage(
      //   // {
      //   //   value: 'backSuccess',
      //   //   id: 'vue',
      //   //   success: true
      //   // },
      //   data,
      //   '*'
      // );
      // },20)
    },

    docShowSetData() {
      this.iframeDocShowing = true;
      // console.log("this.content");
      // console.log(this.content);
      // let content = this.answer.content;
      let  nowEditAns=
      this.answer.answerItems[this.questionItemIdx]
      let content =   nowEditAns.content
      // this.answer.answerItems[this.questionItemIdx].content = docContent;
      console.log("content docShow");
      console.log(content);
      //   if (data.type == 'init') {
      //   return
      // // }
      let that=this
      setTimeout(() => {
        // let  docUrl="http://43.142.150.223:2301"
        let  docUrl=this.docUrl
        // let  docUrl="http://localhost:3001"
        // let  docUrl="http://43.142.150.223:2323"
        // var url =  "/ceshi.html?id="+111;
      
        // js  obj to query string
        let  data={
          type: "init",
          content,
        }
       let queryData=  ObjUtil.objectToQueryString(data)
       console.log("queryData");
       console.log(queryData);
      //  var url =  `${docUrl}?${queryData}`;
       var url =  `${docUrl}/${queryData}`;
// aaa.location=url;
console.log("url");
console.log(url);
// console.log("url");
// console.log(url);
// console.log("that.iframeWin");
// console.log(that.iframeWin);
let  iframeWin=that.getIframeWin()
console.log("iframeWin get");
console.log(iframeWin);

// iframeWin.location.href=url;
// this.iframeWin.location=url;
// that.iframeWin.location.href=url;
// window.location.href = "XXX"
window.docData={
          type: "init",
          content,
        }
// window.docContent=content
console.log("sendMegToIframe to  firame");
        this.sendMegToIframe({
          type: "init",
          content,
        });
        // let  dataStr=JSON.stringify(data)
        // console.log("dataStr sendMegToIframe");
        // console.log(dataStr);
        // this.$store.dispatch('webSocketSend', dataStr)        // 不分模块
        // socketPublic.dispatch('webSocketSend',dataStr);//初始化w
      }, 20);
      // this.$nextTick(()=>{
      //   this.sendMegToIframe({
      //     type:"init",
      //     content
      //   })
      // })
    },
    getIframeWin(){
      if(  this.iframeWin==null){
        this. iframeWin = this.$refs.myframe?.contentWindow
      }
    return    this. iframeWin
   
    },
    iframeMounted() {
      //获取iframe元素
      let iFrame = this.$refs.myframe;
      // myframe
      let iframeWin=this.getIframeWin()
      // let iframeWin = this.$refs.myframe?.contentWindow;;
      this.iframeWin=iframeWin
      // this.iframeWin=iframeWin
      // let
      // iFrame = document.getElementById('myframe')

      //iframe加载完毕后再发送消息，否则子页面接收不到message
      // iFrame.onload = function(){

      //   //iframe加载完立即发送一条消息
      //   iFrame.contentWindow.postMessage('MessageFromIndex1','*');

      // }
      // iframePage.html

      //回调函数
      let _this = this;
      const receiveMessageFromIndex =(event)=> {
        // console.log("receiveMessage from  xioo-docs/ do page ", event);
        let docContent = event.data.content;
        // data
        if(   event.data.type=="close"){
          console.log("docContent on close do page");
        console.log(docContent);
        _this.iframeDocShowing = false;
          // answer.content=docContent
          // this.iframeDocShowing = false;
          console.log( "this.answer");
          console.log( _this.answer);
          console.log( " this.answer?.answerItems");
          console.log(  _this.answer?.answerItems);
          console.log( "this.questionItemIdx");
          console.log( _this.questionItemIdx);
          console.log( "this.answer?.answerItems[this.questionItemIdx]");
          console.log( _this.answer?.answerItems[_this.questionItemIdx]);
        // this.answer?.answerItems[this.questionItemIdx]?.content = docContent;
        // this.answer?.answerItems[this.questionItemIdx]?.content = docContent;
        this.answer.answerItems[this.questionItemIdx].content = docContent;
        }
        // console.log("docContent on close  do page");
        // console.log(docContent);
       
      }

      //监听message事件
      window.addEventListener("message", receiveMessageFromIndex, false);
    },
    saveDrawBack(drawIo) {
      this.answer.answerItems[this.questionItemIdx].drawIo = drawIo;
      // this.questionItem.drawIo = drawIo
      console.log(" this.questionItem saveDrawBack");
      console.log(this.questionItem);
      this.drawIoShowing = false;
    },
    drawIoShowingToggle() {
      this.drawIoShowing = !this.drawIoShowing;
    },
    iframeDocShowDo(){

      this.docShowSetData()
    },
    iframeDocShowingToggle() {
      this.iframeDocShowing = !this.iframeDocShowing;
      // this.drawIoShowing = !this.drawIoShowing;
    },
    toDrawIo() {
      // $router.push query
      let id = this.$route.query.id;
      // let questionId = this.$route.query?.question_id;
      // console.log("questionId");
      // console.log(questionId);
      this.$router.push({
        path: "/test-sys/DrawIo",
        query: {
          question_id: id,
        },
      });
    },
    checkThis() {},
    selectOption() {},
    seeking() {},
    initData() {
      setTimeout(() => {
        this.$refs.codemirrorCode.refresh();
      }, 1);
      // 这样的确在组
      let id = this.$route.query.id;
      console.log("this.$route.query");
      console.log(this.$route.query);
      let _this = this;
      let paperId = id;
      if (id && parseInt(id) !== 0) {
        _this.formLoading = true;
        examPaperApi.select(id).then((re) => {
          console.log("re examPaperApi");
          console.log(re);
          _this.form = re.response;
          if (!_this.form) {
            _this.$message.error("没有数据  id " + id);
            // _this.$message.error(re.message)
            console.log("_this.    $router");
            console.log(_this.$router);
            // _this.    $router.back()
            _this.$router.go(-1);
            console.log("this.$router.go  func");
            console.log(this.$router.go);
            // this.history.go(-1);
            return;
          }
          let titleItems = _this.form.titleItems;
          _this.for_titleItems(titleItems);
          console.log("titleItems");
          console.log(titleItems);
          // _this.questionItem= _this.form.titleItem.qu
          _this.remainTime = re.response.suggestTime * 60;
          if(_this.debug){
            _this.remainTime=111111111111
          }
         
      
          _this.initAnswer();
          _this.timeReduce();
          _this.formLoading = false;
        });
      }
    },

    for_titleItems(titleItems) {
      // titleItemIdx:0,
      // titleItem
      this.titleItem = titleItems[this.titleItemIdx];
      for (let titleItem of titleItems) {
        console.log("titleItem");
        console.log(titleItem);
      }
      // getQuestionTypeByInt
      this.questionItem = this.titleItem.questionItems[this.questionItemIdx];
      // questionItem
      this.forQuestionItems(this.titleItem.questionItems);
    },

    forQuestionItems() {
      for (let questionItem of this.titleItem.questionItems) {
        questionItem.questionTypeName = common.getQuestionTypeByInt(
          questionItem.questionType
        );
        if (!questionItem.drawIo) {
          questionItem.drawIo = JSON.parse(
            '{"text":[],"begin":[],"circle":[],"lines":[]}'
          );
        }

        // console.log("titleItem");
        // console.log(titleItem);
      }
    },
    initVideo() {
      //原生初始化视频方法
      let myVideo = this.$refs.video;
      //ontimeupdate
      myVideo.ontimeupdate = function () {
        myFunction();
      };
      let _this = this;

      function myFunction() {
        let playTime = myVideo.currentTime;
        setTimeout(function () {
          localStorage.setItem("cacheTime", playTime);
        }, 500);
        let time = localStorage.getItem("cacheTime");
        // 当前播放位置发生变化时触发。
        if (playTime - Number(time) > 2) {
          myVideo.currentTime = Number(time);
        } else {
        }
      }
    },

    // 播放回调
    onPlayerPlay(player) {
      // this.globalSetting = true
      console.log("player play!", player);
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
    },

    // 暂停回调
    onPlayerPause(player) {
      // this.globalSetting.controls = false;
      // console.log("player pause!", player);
      // var video = document.getElementById("video");
      // video.controls=false;
      // document.getElementsByClassName("vjs-control-bar").style.display = "none";
    },

    stopVideo() {
      let mediaStreamTrack = this.mediaStreamTrack;
      if (mediaStreamTrack) {
        console.log(this.mediaStreamTrack);
        console.log(this.mediaStreamTrack.getTracks());
        this.mediaStreamTrack.getTracks()[0].stop();
        this.mediaStreamTrack.getTracks()[1].stop();
      }
    },
    // async
    initVueApp() {
      // navigator.mediaDevices.getUserMedia 关闭
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((res) => {
          this.$refs.video.srcObject = res;

          // 视频分析
          this.mediaStreamTrack = res;
        });
      // this.$refs.video.srcObject= await navigator.mediaDevices.getUserMedia({video:true,audio:false});
      this._context2d = this.$refs.canvas.getContext("2d");
      this.canvas = this.$refs.canvas;
      console.log("this.canvas");
      console.log(this.canvas);
    },

    btnTakePhotoClicked() {
      // this._context2d.drawImage(this.$refs.video, 0, 0, 400, 300);
      this._context2d.drawImage(this.$refs.video, 0, 0, 200, 150);
      var img = document.createElement("img"); // 创建img元素
      img.src = this.canvas.toDataURL("image/png"); // 截取视频第一帧
      var svaeHref = document.getElementById("save_herf");
      console.log(img.src);

      var sd = document.getElementById("save_img");
      svaeHref.href = img.src;
      sd.src = img.src;
    },

    formatSeconds(theTime) {
      return formatSeconds(theTime);
    },
    goBack() {
      // this.    $router.go(-1)
      this.$router.push({ path: "/dashboard" });
    },

    timeReduce() {
      let _this = this;
      this.timer = setInterval(function () {
        if (_this.remainTime <= 0) {
          _this.submitForm();
          // _this.submitFormConfirm();
        } else {
          ++_this.answer.doTime;
          --_this.remainTime;
        }
      }, 1000);
    },
    questionCompleted(completed) {
      return this.enumFormat(this.doCompletedTag, completed);
    },
    goAnchor(selector) {
      this.$el.querySelector(selector).scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "nearest",
      });
    },
    initAnswer() {
      this.answer.id = this.form.id;
      let drawIoInitObj = JSON.parse(
        '{"text":[],"begin":[],"circle":[],"lines":[]}'
      );
      let titleItemArray = this.form.titleItems;
      for (let tIndex in titleItemArray) {
        let questionArray = titleItemArray[tIndex].questionItems;
        for (let qIndex in questionArray) {
          let question = questionArray[qIndex];

          this.answer.answerItems.push({
            questionId: question.id,
            content: null,
            contentArray: [],
            completed: false,
            itemOrder: question.itemOrder,
            drawIoId: null,
            drawIo: drawIoInitObj,
          });
          console.log("question.itemOrder");
          console.log(question.itemOrder);
          console.log("question.id");
          console.log(question.id);
          // console.log("this.answer.answerItems initAnswer");
          // console.log(this.answer.answerItems);
        }
      }

      this. drawIoStr=JSON.stringify(
      this.answer.answerItems[this.questionItemIdx].drawIo
    )
    },
    nextProblem() {
      console.log("this.questionItemIdx");
      console.log(this.questionItemIdx);
      // <!-- log  -->

      console.log("this.titleItem.questionItems.length");
      console.log(this.titleItem.questionItems.length);
      if (this.questionItemIdx >= this.titleItem.questionItems.length - 1) {
        alert("last");
        return;
        // this.titleItemIdx++;
        // this.questionItemIdx=0;
        // this.titleItem=this.form.titleItems[this.titleItemIdx]
        // this.questionItem= this.titleItem.questionItems[this.questionItemIdx]
      }
      this.questionItemIdx++;
      this.questionItem = this.titleItem.questionItems[this.questionItemIdx];
      console.log(" this.questionItem=");
      console.log(this.questionItem);
      // this.questionItem.drawIo
    },
    prevProblem() {
      console.log("this.questionItemIdx");
      console.log(this.questionItemIdx);
      // <!-- log  -->

      console.log("this.titleItem.questionItems.length");
      console.log(this.titleItem.questionItems.length);
      if (this.questionItemIdx <= 0) {
        alert("first");
        return;
        // this.titleItemIdx++;
        // this.questionItemIdx=0;
        // this.titleItem=this.form.titleItems[this.titleItemIdx]
        // this.questionItem= this.titleItem.questionItems[this.questionItemIdx]
      }
      this.questionItemIdx--;
      this.questionItem = this.titleItem.questionItems[this.questionItemIdx];
      console.log(" this.questionItem=");
      console.log(this.questionItem);
    },

    changeProblem(index) {
      this.questionItemIdx = index;
      this.questionItem = this.titleItem.questionItems[this.questionItemIdx];
    },
    submitFormConfirm() {
      let that = this;
      // 引用确认消息弹窗api
      this.$confirm(
        "确定要提前提交试卷吗。", // 第一个参数为弹窗消息内容
        "提示", // 第二个参数为弹窗左上角标题title
        // 第三个参数为弹窗项的options，应该为object对象
        {
          confirmButtonText: "确定", // 确认按钮的文本，可省略，默认为确定
          cancelButtonText: "取消", // 取消按钮的文本，可省略，默认为取消
          type: "warning", // 弹窗的消息类型，比如为warning时弹窗左边图标为'!'感叹号，为success时图标为'√'的勾。
        }
      )
        // then中填写点击确认按钮后执行的事件，例如执行删除该条数据的delect请求
        // then中填写点击确认按钮后执行的事件，例如执行删除该条数据的delect请求
        // then中填写点击确认按钮后执行的事件，例如执行删除该条数据的delect请求
        .then(() => {
          that.submitForm();
        })
        // catch中填写点击取消按钮后执行的事件，例如消息提示“已取消删除”
        .catch(() => {
          this.$message.info(this.$t("lang.Deletecancelled")); // 使用i18n国际化表示的“已取消删除”
        });
      // ————————————————
      // 版权声明：本文为CSDN博主「LangForOne」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      // 原文链接：https://blog.csdn.net/vvv3171071/article/details/125430070
    },
    submitForm() {
      // el ui 弹窗 确定

      let _this = this;
      window.clearInterval(_this.timer);
      _this.formLoading = true;
      console.log("this.answer submitForm");
      console.log(this.answer);
      for (let answerItem of this.answer.answerItems) {
        // answerItem.drawIo = answerItem.drawIo.replace(/data:image\/png;base64,/g, "");
        answerItem.drawIo = JSON.stringify(answerItem.drawIo);
      }

      examPaperAnswerApi
        .answerSubmit(this.answer)
        .then((re) => {
          if (re.code === 1) {
            _this.$alert("试卷得分：" + re.response + "分", "考试结果", {
              confirmButtonText: "返回考试记录",
              callback: (action) => {
                _this.$router.push("/record/index");
              },
            });
          } else {
            _this.$message.error(re.message);
          }
          _this.formLoading = false;
        })
        .catch((e) => {
          _this.formLoading = false;
        });
    },
  },
  computed: {
    ...mapGetters("enumItem", ["enumFormat"]),
    ...mapState("enumItem", {
      doCompletedTag: (state) => state.exam.question.answer.doCompletedTag,
    }),
  },
};
</script>

<style lang="scss" scoped>
.align-center {
  text-align: center;
}

.exam-question-item {
  padding: 10px;

  .el-form-item__label {
    font-size: 15px !important;
  }
}

.question-title-padding {
  padding-left: 25px;
  padding-right: 25px;
}

.progressTime :hover {
  color: black;
}

.iframeDoc {
  width: 90vw;
  height: 90vh;
  border: medium none;
}
</style>
