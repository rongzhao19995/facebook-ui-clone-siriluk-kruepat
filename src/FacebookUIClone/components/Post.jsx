import React from "react";
import ReactHtmlParser from "react-html-parser";

const postList = [

    {
        date: "Nov 15, 2020",
        caption: "2012  11月 15号  ",
        desc: '<br><br> <b><span style="color:red;">这个请 不要看 先 把下面的Post看完 再回来这个Post</span></b> <br><br><br><br><br> 我做这个de原因 是因为 你说我不发我们的东西 。（其实不会了 现在 我都会发了。只要能让你 感受到你真的是被我爱着 我都发 因为我是你的男朋友 我应该做 我该做的事情） 里面有着 我想和你说很久的话 我所有的感觉  所以我就特地做这样给你的惊喜。 我做不到 2020 对不起 时间不够了. 其实这个东西没有打算那么快给看的。这个东西 我准备了至少2个月了。 那时候 你问我在干嘛 我说在学习。 <br><br>其实我都一直在弄这个 我写了这个 Facebook 至少 2个月 因为我有上班 很难有时间 所以 我一得空 一周目就做 。 我知道 我这个 周年纪念日 一定来不到 泰国陪你 所以 我想给你 惊喜 但是 现在只能 这样的情况给你了<br><br><br><br><br>其实 我花那么多时间做 这个 我只想让你 知道 我很爱你 我很想你 我真的很想 我们有未来。<br><br><br>  我知道 我很差 我很笨 每次说该来 又一些毛病 还是 会改不掉 但是我会尽力的 我想你给我机会 。以前不能给你的 我现在都能给你 因为 我知道 除了你 就是你 。 你是 我的全部 你是我努力的 动力  <br><br><br> 人之所以可以走在一起那么久 不是因为对方 是完美 没有缺点 。而是跟 对方 慢慢改 。 把 不好的都变好。  <br><br><br> 每一个情绪的爆发后，仍然愿意拥抱、抚平对方所有的不开心和暴躁。能够将口头允诺的安全感付诸实践。在对方需要的时候，义无反顾地出现和竭尽全力的帮忙。<br><br><br> 这一年 大家 都过得不简单。 因为 病毒的关系 我不能 找你 你不能找我 不能像正常情侣 一样 。已经很久没和你 逛街 吃饭 做饭 洗澡 吹头发 看电影 买菜 和你诉苦 和你两个二一起坐着 什么 也不想看着对方 彼此都知道对方的心在对方 。 我会为我们的未来努力。 <br><br><br> 吵架不好 我也很不喜欢。 吵架让我知道 我什么需要改进。 我也知道。  我会为你把我所有的不好都改点 我不会有一点委屈 因为 我知道能在一起很久的情侣 他们 都会 为对方 努力 。 我和你经历了很多 我很想我们我们还有很多事要一起经历。 想来很多很多。 <br><br><br> 我表达可能不是很好 但是 每句 都是真心 的。  <br><br><br> <b><span style="color:red;">I LOVE YOU</span></b> <br>',
        img1:
          "https://lh3.googleusercontent.com/pw/ACtC-3cEZv-NFmZWImFq2GHdMM6zx2XMzDeuBgeMCf29UIQuqJypL-g3oBjgib0y864bbORCQ9xJMG4W8Fop2O7fpZFRvE8gesmDfdZv9aJULi0cxOeRFimwLMm6iJ4n_uU9ftpEb9S1zP9ta5VfLhU3K_Rodg=w614-h1364-no?authuser=0",
        img2:
          null,
        img3:
          null,
        img4:
          null,
      },
    {
        date: "Agus 17, 2018",
        caption: "2018  10月 17号  佳佳生日Trip",
        desc: '<br> 每次的分开 都会让 跟珍惜 我们能拥有的时间。 每次的分开 只会让我更想你 跟爱你。 因为 我知道 我们 是不简单的。  <br>',
        img1:
          "https://i.ibb.co/cXMBZhM/IMG-20181017-163838.jpg",
        img2:
          null,
        img3:
          null,
        img4:
          null,
      },
    {
        date: "October 16, 2018",
        caption: "2018  10月 17号  佳佳生日Trip",
        desc: '<br> 最后一天了。 回去之前 我们先去吃个饭 本来 要去 说着 那个 情侣 一个香港人 一个泰国人。 他们开的咖啡店 一起聊聊天。( 我也想我们也可以 想他们一样 可以每天在在一起 即使 不赚钱 只要 能陪着对方身边 已经很满足了 )。 <br><br><br> 但是没开 所有我们就走到里面 去 。 里面跟漂亮 食物也不错好吃。  还给宝宝 拍了非常漂亮的照片 我也很喜欢 那张。 <br><br><br> 宝宝 哭了 我就笑 尽量不要让你那么伤心。 虽然这样没用 。  <br>',
        img1:
          "https://i.ibb.co/RY4JV2r/IMG-20181017-115406.jpg",
        img2:
          "https://i.ibb.co/f8rM5GZ/IMG-20181017-115026-copy.jpg",
        img3:
          "https://i.ibb.co/pn9SbCt/IMG-20181017-115035.jpg",
        img4:
          "https://i.ibb.co/f8rM5GZ/IMG-20181017-115026-copy.jpg",
      },
  {
    date: "October 16, 2018",
    caption: "2018  10月 16号  佳佳生日Trip",
    desc:"<br>给宝宝的  布置 好像太夸张 不知 会喜欢吗 哈哈。 其实 开完等你洗澡给你看看 。<br>",
    video: "https://www.youtube.com/embed/GKENnLSJcPI",
  },
  {
    date: "October 16, 2018",
    caption: "2018  10月 16号  佳佳生日Trip",
    desc:"<br>我的宝宝 太可爱了 每次看到你笑 我都很开心 。 因为你笑时候真的很美丽<br>",
    video: "https://www.youtube.com/embed/q_K9du-_fig",
  },
  {
    date: "October 16, 2018",
    caption: "2018  10月 16号  佳佳生日Trip",
    desc:
      "<br>早上起来给宝宝做早餐吃。 宝宝也给我做早餐吃。 我很享受这样的生活 简单 却很有爱 。 <br><br><br> 我做了 鸡蛋 还是 香肠 <br><br><br> 宝宝做了一个狠辣的食物. 但是 我可以吃 就是一直流汗。 因为 是宝宝做的 我一定要吃完。 哈哈。   <br>",
    img1:
      "https://i.ibb.co/x5sDD7F/IMG-20181016-135501.jpg",
    img2:
      "https://i.ibb.co/ZLpzpV7/IMG-20181016-135438.jpg",
    img3:
      "https://i.ibb.co/9tGtm72/IMG-20181016-135559.jpg",
    img4:
      "https://i.ibb.co/3WrtyQB/IMG-20181016-135602.jpg",
  },
  {
    date: "October 14, 2018",
    caption: "2018  10月 14号  佳佳生日Trip",
    desc:
      "<br>看到你那么享受 吃爱吃的食物我 很开心。  很高兴看到你开心。  <br>",
    img1:
      "https://i.ibb.co/BsntZzj/IMG-20181015-131418.jpg",
    img2:
      "https://i.ibb.co/vxFzr1D/IMG-20181015-123913.jpg",
    img3:
      "https://i.ibb.co/FgtN7xq/IMG-20181015-123902.jpg",
    img4:
      "https://i.ibb.co/pyCgwqC/IMG-20181015-195401.jpg",
  },
  {
    date: "October 14, 2018",
    caption: "2018  10月 12/ 14号  佳佳生日Trip",
    desc:
      "<br>每次你不在家的时候 我每次 起床 就给你 整理 你的房间 给你 好好舒服 不用做这个做那个。 只想你可以享受。 <br><br>我每次都会给你装满满的水 就是 害怕你一个人 那么重  要爬5楼 才可以到房间 （我想给你一个家 但是 我害怕我做不到 我不敢说 但是 我都有在努力 即使现在 还是一样 目标只想给你一个家 可以照顾你 可以好好爱你  让你好好享受 不用 做那么多。 ）。 所以 我把 我能做的都给你做。因为 我知道 我只能做那么几天 。 过后就得你自己弄了。<br><br> 知道家有蟑螂 就弄了一个 可以杀死蟑螂的东西 放在 桌子下面。  <br>",
    img1:
      "https://i.ibb.co/rp5FByW/IMG-20181014-234017.jpg",
    img2:
      "https://i.ibb.co/c8b3hj1/IMG-20181014-234021.jpg",
    img3:
      "https://i.ibb.co/swWSJpx/IMG-20181015-111137.jpg",
    img4:
      "https://i.ibb.co/VH9B719/IMG-20181015-113322.jpg",
  },
  {
    date: "October 13, 2018",
    caption: "2018  10月 12/ 13号  佳佳生日",
    desc: "<br>舒服在享受的小宝宝。 <br>",
    img1:
      "https://i.ibb.co/cy9b6zW/IMG-20181013-205255.jpg",
    img2:
      "https://i.ibb.co/ZT2t4NH/IMG-20181013-205607.jpg",
    img3:
      "https://i.ibb.co/n8QqjWZ/IMG-20181013-210802.jpg",
    img4:
      "https://i.ibb.co/4pkWDH3/IMG-20181013-211120.jpg",
  },
  {
    date: "October 12, 2018",
    caption: "2018  10月 11/ 12号  佳佳生日 惊喜的前一天",
    desc:
      "今天 就是我的佳佳 生日 我要给他一个惊喜 所以我就特地和他说今天会和忙 很多事情做。 可能不能你视频。 到了5.30 后 我就赶紧跑着回去机场的路上 我非常害怕出错 还是漏掉什么了。 到了 机场的火车站我发现我东西不见了。 一直找才发现 其实东西就在我的裤袋里面。 非常赶的。 火车又慢 到了 机场我得第一时间飞去 机器那边 打印等机票 但是 因为飞机 会在半小时内飞走 所有 机器不能打印了。 要去 柜台 。 觉得还是弄到了。  这样我就做做上飞机了。 休息下2小时半就到曼谷。<br><br><br> 到了曼谷后我第一时间就是打开网络 给你 知道 我还在忙 可能今天不能视频了。 但是我这样弄好像给你发现我在泰国了。 过后我就立刻 跑去打grab 第一时间 到你家。 到你家后 <br><br><br> 第二个问题出来了。 我因为 没有办法叫你 因为要给你惊喜 所以 只能靠别人让我打开门去上面 等了好久总有等到 一个做 motor 的司机。 我不能说泰语 所以就用手机给他翻译些说  “我要给我女朋友惊喜 她今天生日 ” 他也很好 明白了 给我上去 。 我上到去后. 我就给你打电话说 你在哪里要。 一直逗你 。 然后我就悄悄你的门 说我在外面。 哈哈。 你就很开心的开门 。 然后就放下相机 就抱着你。 太久没有抱你了。 想念你了。 然后你也告诉我说 其实我开facebook 的时候你已经知道 我到了。 但是不敢确定。 我知道你工作需要 生活需要 让你的生活更加有 仪式感。 我就给你 买了你要想要的 灯， 椅子的白色布（你现在还在用着， 我很开心 ，因为 你有好好的 用我给你东西 我很开心）。 还有很多 很多 其实我买给你 只是想让你生活过得好一些 开心的一些 毕竟 我不在你身边 已经是我们最大的问题。 所以我只能这样做 。 其实这些东西不是很贵。 我也有能力给你的。 我知道你每次 都很开心 也很不开心 因为我花钱。 其实我觉得为爱的人花钱 一点都没问题  非常值得。 因为我知道 宝宝也很爱我。 <br><br><br> 这一次 我们没去太远的地方 因为 这次也只是呆几天而已。 过一天就要回去了。 所以我们就去了 Khao Shan 那边。一早起来我们就一起去 Terminal21 吃早餐。 过后我们走路去 Khao Shan 。 对不起要你走那么远。 为了 让你 舒服 我们晚上就去了 按摩 。 知道你喜欢按摩 一直没有时间去 现在给你去了。我们也去了 那边拍好多好多的照片 。 每个照片都是 我帮你 修 让你变成一个女神 发Facebook  。 <br><br><br> 剩下的几天 我们 就做了平常 情侣会做的东西。 我们一起逛街 带你去吃好吃的 一起逛夜市 。你说家里好像有蟑螂 所以我就弄了一个放可以弄死蟑螂的 东西 在你桌子下（其实我也不知道有没有用 至少试一试吧）。  隔一天 后你需要上班 所以我只能在家等你。 大概快 下班了 我就去 TOwn in Town 接你下班。 看起来一个很的东西 对我来说都是 很难的 很奢侈 。 因为我不是每次都有这个机会 接你下班。 因为宝宝生日 因为宝宝爱吃 MK 所以 一下班就接宝宝去吃好吃的。 隔天后， 宝宝又给我做了 爱心早餐 。 我也有做一些 。 但是你做的 那个食物太辣了。 我都一直流汗 但是宝宝做的食物真心好吃。 想到宝宝那么好 我好希望可以给你一个使用的厨房 以后就可以每天给我做好吃的。 到了 晚上， 我给宝宝布置 房间。 之前的灯因为怀了 所以这次要在弄。 还有上班的桌子 要好看一点 这样就会可以好好上班。 <br><br><br> 最后一天了 又要回去。今天我起得特别早。 开到日出 。 我亲了宝宝的额头 宝宝应该没发现。  宝宝 对不去 又让你哭了 。  因为 我要走了， 在车上 当我给你拍照你时候 眼睛又开始哭了。 在我们去机场前我们出去了好吃的 给你拍漂亮的照片 。 然后又要去 我们最不喜欢的地方。 机场。 到了机场 我们弄完东西后 我们 又回到我们每次呆的地方。 呆到快 到时间 登机了。 我就会给你打车先让你回 不想看到你哭 我一开你哭 我就哭了。 在登记时候我还真哭了。 我真的很想你 狠爱你。 但是没办法 现实是残酷的。 <br><br>",
    img1:
      "https://i.ibb.co/Hz3qrQ8/IMG-20181017-130453.jpg",
    img2:
      "https://i.ibb.co/BP2h9CM/IMG-20181011-212551.jpg",
    img3:
      "https://i.ibb.co/vLKt4K2/IMG-20181012-223635.jpg",
    img4:
      "https://i.ibb.co/BtRp37K/IMG-20181012-234729.jpg",
  },
  {
    date: "May 1, 2018",
    caption: "2018  5月 1号  和佳佳 情侣天 ",
    desc:
      "<br> 要走了 宝宝 知道我爱吃你做的食物 早上特地起床就去做给我。  你是一个好女朋友 更是一个好老婆 。（ 如果能把你娶回家 我就是最幸福的人） <br>",
    img1:
      "https://i.ibb.co/M7yRb2Q/IMG-20180430-112302.jpg",
    img2:
      "https://i.ibb.co/PrrRb7X/IMG-20180429-112831.jpg",
    img3:
      "https://i.ibb.co/wKKMFsq/IMG-20180430-114903.jpg",
    img4:
      "https://i.ibb.co/WDKdS3S/IMG-20180501-104515.jpg",
  },
  {
    date: "May 1, 2018",
    caption: "2018  4月 26号 我们一起出远门 去Pattaya",
    desc:
      "第一天<br><br><br>这次旅程我们选择了去漂亮的Pattaya 和 Koh Larn. 我到了曼谷 就 和你一起去做面包车去 Chonburi。<br><br> 路程2小时多。 我们一起听歌 一休息 一起看看对方。 害怕你不舒服 特地和你说 你可以靠着我肩膀 这样就 你的头就不会晃来晃去。<br><br><br>到了那边后我们直接就去小岛。 因为我把行程安排错了。 没办法 只能这样了。<br><br> 一到小岛就下去雨了。 我们俩就一直等一直等 为什么我们的酒店还没来接我们。 我们太搞笑了。 过了不知道多久酒店的人终于来接我们。 但是 问题来了。 那时候下雨。 还有我们分开 摩托。 然后酒店主人载我先到。 你是别一个员工载你。 我到了不知道多久 也近房间check in 了。 你还没到。 我就一直很紧张 我害怕 你不知道去哪儿了。 担心你。 我还快和老板吵架起来 为什么你还没到 还以为出事了。 我和老板沟通有些问题 因为 我和他都用英文 问也不会泰语。  老板就给员工到电话 问为什么那么久。 我就 一直在外面等你 。因为下大雨了。 怕你出事。<br><br>最后很好 你还是到了 看到你都湿了。我的心都过意不去 <br><br><br> 到了那边也累了。 快下午了。 我们都还没吃午餐。 所以就在房间里面 煮方便面 和香肠 一起二人世界。 然后 我们就一起租摩托 。 晚上我们就一起吃 海鲜。 我们去了 Koh Larn 的 夜色 买了好多海鲜。 然后我们就带回去 酒店吃。 大家一边听歌一边享受晚餐 和心爱的人。 现在想起 我都开始 继续这样了。  <br><br><br> 到了要睡觉了。 我和你说下去洗澡吧。 然后我就开始我的小惊喜。 我害怕时间不够 我赶紧弄。 你才刚去洗澡 突然又跑回房间 吓到我 。不知道你有没有发现。 等你洗完澡后 我就 立刻 给你惊喜 把灯关掉 。 给你个慢慢的爱心。  比较爱了你那么久 却没行动 所以就给你 这样的惊喜 希望你会喜欢。你也告诉我 我是第一个男孩会为你这样做的人。 我想说 你是我最爱的女人了。 然后就这样 大家也和之前一样 大家一起抱着睡觉。 <br><br><br> 第二天<br><br><br> 快来的时间过得很快。 我们又得离开这小岛了。 但是之前  我们做摩托 去了好多地方 。 去了好多海边。 然后 你就说了 一个地方是可以拍漂亮的照片 但是不知道那边。 我们找了找 。 应该就是那部里。 所以我们就在那边拍照。 拍了不久 ， 别人也跟着我们一起在这里拍拍拍。 我们也去了一个咖啡店 。那个时候没有雨衣 只有一个笑得。 就给你买  那边都一直下大雨。 只能在咖啡店等雨停下来。 <br><br><br> 我们也在这边 目睹意外的发生。 有了撞摩托。 我也不知能干什么 。看到他留了很多血 就立刻 给他我们的水 洗洗脸。 我也和自己说 要小心一点 不要让 佳佳 出事。 我不想你出事 我会过意不去的。 <br><br> 下午了。 是时候回去 Pattaya了。 一路上你都很累了。 看到你那么不累就说 你先休息一会吧。在船上我们也开到一堆很有爱的爸爸和 他的小孩玩。 我们还给他拍了照。 <br><br><br> 到了Pattaya 我们就去Checkin 酒店，看到condom 我和你说 我们等下用 哈哈。然后就在酒店拍拍照。 晚上了。肚子餓了， 我们就在附近找食物吃。 但是好多 不知道 应该选哪一个 。 到最后我就到了一间食物。 老板 非常不礼貌 说什么要水 外面买酒可以啦。 我知道后很生气 不能做什么 只能在Google Review 让别人不要再来这个地方吃晚餐。 看他还敢得罪我的佳佳吗。你还说 有个男的一直看着你 我问你哪一个。你告诉我 。 然后我又一直看着他 看他还敢这样一直看你妈。  边走边走 路上 看到 有个 Patkraomu 不错 也就打包回酒店吃。 你还问我 那么能吃啊。 哈哈<br> 到了晚上。 我们就做了 我们的一次。 你问我真的要么。 我想了想。我就做了。 因为你是我的未来 我会对你好 会对你负责的。 <br><br><br> 第三天<br><br><br> 会曼谷了。 你早上一早就给我做饭 我知道你很爱我。 我也很爱你。 你给我做我爱吃 patkraomu。 吃完后我们就一起去 Hualumpho 送东西的。 然后我们就在去逛街。我们也第一次一起看戏 我第一次知道 泰国看电影要唱国歌的。 我们和对方说下次我们要来看Part2 。 我很享受这样 看起来简单的事情。 但对我们来说 其实很难 因为我们远距离。 我真的很想可以和你一起生活。 这样 简单的事情我们就可以每天都能做。然后晚上我们就见你的大哥。 第一看到他 我们两很搞笑。 他和我说 你漂亮吗。 我说当然漂亮 。哈哈。 我的佳佳最漂亮了。你知道我听不懂你们说什么 你还问我 OK吗。 会无聊吗。 我觉得OK 没有无聊的。 <br><br><br> 最后一天了<br><br><br> 又是时候回去了。 你问我几点飞。 我知道你想我。 我也想你。 你给我最最后的早餐 。吃完后我们就一起躺着休息 你抱着我 我抱着你。 你也趴在床上哭红了眼。 没办法了。 我也可以一直陪着你。 要打飞机走了。 我们去了 我们每次都会呆的地方 一起做着 看看对方。 要飞了。 每次飞之前 我都会和你视频。 我担心你一个人。 我要知道你能安心到家。 我不能想象你会有什么感觉。 我知道一定不好受。 所以如果可以选 我会选择我是飞 那个。 因为打飞机 还要担心你  担心你一个人下飞机 拿着大行李 打车 打巴士 要很久才到家。 所以 我希望我是打飞机的人 而不是你。 佳佳 我很爱你。 <br><br>",
    img1:
      "https://i.ibb.co/6Wj0ynV/IMG-20180427-223618.jpg",
    img2:
      "https://i.ibb.co/ctJtdTn/IMG-20180428-232417.jpg",
    img3:
      "https://i.ibb.co/mJkN1PF/IMG-20180501-160012.jpg",
    img4:
      "https://i.ibb.co/q7TYhXQ/IMG-20180501-170231.jpg",
  },
  {
    date: "April 06, 2018",
    caption: "2018  4月 6号 不知不觉又一个月过去了 ",
    desc:
      "又是4月了。 但是 泼水节 我没能拿到假期。 所以我们的下次见面再 4月 26日。 想来了很久 工作努力了那么久 终于又等到相遇的机会。 <br>每次我都很珍惜 很想多拿几天 最好就是可以一星期那么长 但是我 工作 有时候真的很忙。 所以最多只能拿到2，3 天。 <br><br>而且我也得 为我们下次的见面 留一点假期。 <br><br>",
    img1:
      "https://i.ibb.co/Mspx9HZ/mmexport1528955482023.jpg",
    img2:
      "https://i.ibb.co/grqDfWX/IMG-20180421-235814.jpg",
    img3:
      "https://i.ibb.co/44ggrPz/IMG-20180422-192713.jpg",
    img4:
      "https://i.ibb.co/G0zh4Bb/IMG-20180427-004918.jpg",
  },
  {
    date: "March 01, 2018",
    caption: "2018  3月 1号 不知不觉又一个月过去了",
    desc:
      "每天的视频电话成了我们每天必要的事情。  还记得 那时我们每天都有说有笑的 。 很怀恋<br><br>",
    img1:
      "https://i.ibb.co/TqB6STw/mmexport1518622297781.jpg",
    img2:
      "https://i.ibb.co/8sh9Yq1/mmexport1519883360657.jpg",
    img3:
      "https://i.ibb.co/vB2Rryc/mmexport1519917463851.jpg",
    img4:
      "https://i.ibb.co/2n0zX3S/mmexport1519917528928.jpg",
  },
  {
    date: "Feb 06, 2018",
    caption: "2018  2月 6号  第一天见面后的隔一天",
    desc:
      "刚回来就准备下一个行程了。 看宝宝对我笑 很有爱 （我知道我们第一能回到去之前那么甜蜜 我有信心)",
    video: 'https://www.youtube.com/embed/iylBhwY7WNw'
  },
  {
    date: "Feb 06, 2018",
    caption: "2018  2月 6号  第一天见面后的隔一天",
    desc:
      "从曼谷回来了。的第二天 。 <br><br>已经不习惯没有你在我身边。 想再和你 第一次和你在一起睡的时光。 <br><br>突然又回到 电话视频 感觉彼此都不开心。 我只能下次再找你。 希望那时候我们那样好。 我还给你 发我们的合照。我只能说 我想你 我爱你。 只是我没说 但是 我真心爱你的。",
    img1:
      "https://i.ibb.co/FJ0cH6B/wx-camera-1517928344916.jpg",
    img2:
      "https://i.ibb.co/0nyTgvR/IMG-20180206-212937.jpg",
    img3:
      "https://i.ibb.co/CW4GcGx/IMG-20180206-212944.jpg",
    img4:
      "https://i.ibb.co/SfJrRzY/VID-20180206-233250.jpg",
  },
  {
    date: "Feb 05, 2018",
    caption: "2018  2月 1号 我们的一次见面",
    desc:
      "说真的这是我最开心的一天 因为谈了那么久 每天视频 。现在总有有机会去看你。 <br><br>我虽然每天喝你视频 但是我还是害怕我长得不好看 害怕你会跑掉。<br><br>我们第一天我非常紧张以为第一天为了一个心爱的女孩 特地一个人冲外地飞过来。 我自己我自己做的决定不会错的。 还记得你那时候在上班。 我和你说慢慢来 不要匆忙。 你说 你冲ASOK 那边过来。 现在塞车 会有点久 我说没关系 我可以等你。<br>然后我们就像电影一样。 第一次见面 一直好紧张。 在车站上面人很多 人来人往。 我就一直看一直看。 你知道是谁先见到对方么。 是我  我就叫着你。 你虽然长不高。 但是我还是能找到你。第一次见面的时候就别你的笑容打动了。 笑得很可爱。 <br>然后我们就一起去了Neon Night Market. 我们一路上虽然话不多 但是我还是对你有情趣的。 因为 你太可爱了。 我们边走边聊天。<br><br>我知道你想要钻饰你的房间不好看 想买东西。我们就买了一些灯泡。问问呢晚餐想吃什么 想吃鱼就点鱼。吃完付钱后 你问多少钱 我说我请你吧。 虽然知道我不会要你付钱的 但是你还是很有礼貌问了一下。<br><br>吃完后 我们就在漂亮的这里拍照。 我一开始有点尴尬 不敢和你拍。 一直说 我给你拍照吧。 你怕把。 到最后我们还是拍了几张合照。<br>然后最后我们就一起走了搭地铁回酒店。 其实这是我的第一次。 可能是我们聊了很久 知道对方不是玩玩的 是认真的。 所以我们就很自然的一起睡觉。 我这次旅行其实我也准备了一些礼物给你。 我觉得钱 能买到很好的礼物。 但是我觉得最好礼物就是出之于对方的手做出来的。<br>我给你做了个视频 。 里面都是我们还没在一起见面的回忆。 我把它做成了一个视频。 即使以后也可以回放 。 你也被我感动了。 就这样我们就在一起睡。 <br><br><br>第二天<br><br>隔天起来 我们就一起做床去 王宫。 你去不用付钱 我去要付钱 。 我还傻傻说 你叫我泰语我就能假装泰国人进去不用付钱了。就这样我们又在王宫 过了半天。 一路上很热。 我还一直叫你喝水 就怕担心你。去了王宫 我们也一起去了 China Town 。<br>到了晚上。 我就和你回你的家。 回家路上我看到路上那么黑 我还真担心你一个女孩 在这里生活。 好像可以一直陪着你 在你身边。<br>我还和你说 那么晚 以后不要以个人在外面走 危险。 晚上肚子而来 你带我到你第一个家的 附近吃晚饭。 我就点了我喜欢的Padthai。 而你就对了类似Salad 木瓜的食物。<br>吃完了到你就 我就给你布置你家 。给你安装小灯笼 然你会有家的感觉。 不会害怕在这里一个人。<br><br><br>第三天<br><br><br>这是我的最后第二天了。 我们就去拜拜四面佛。 我也是第一次。 我也不知道求什么的。 我只说了一些 我们的事情。 希望可以好好在一起到。  也算是有实现了一些。  我们就去了Lumphini 公园走走 看看风景 好好陪对方 。什么也不做。 我记得我们那天坐在椅子上说了很多 我们的东西。 你靠在我肩膀上 。 我看不到你有没有哭。 但是我知道你眼睛红红的。你告诉我 我不想你离开。 其实我也是 我不想我们离开。 我想可以一直在这里陪着你。<br><br>差不多要晚上了。我就带你去 酒吧。 因为前几天我们都是简单的旅程 所以想在最后一天前 带你去逛逛好玩的 好看的地方. <br>我们也未各自拍照发照片。 回家路上 竟然遇到 姐姐上班的朋友。 一路上 回家了 。 我们什么也没做就抱着一起睡。<br><br><br>最后一天了。<br><br><br>你需要上班。 没办法送我。 我其实特别想你送我 但是想到你一会哭 我就直接去。 我们还在要走之前 在床上好好休息 你看我 我看你。 什么也不能做 只能看着和对方 离开。你要上班了 我也要走了。 我们就抱着一起。 好想我们可以再包在一起。我送你去Town in Town 上班。 我就去MCD 等一会去机场 。 在MCD里面 我真的很想你。 但没有办法我就得回去了。 每次我都在飞机上翻开我们在这次旅程中拍过的照片 回忆过去。 我每次想了 眼睛就红红的。 我不想和你离开。",
    img1:
      "https://lh3.googleusercontent.com/pw/ACtC-3fIFVJXKU6bJZ5LXPFmrJH1om7KWLtRwNBmIAdvecVv53hpVtFbvKUk6rdzh5TUw7HuTdlIB3yAUpnTfX9kBXVEHwNC3WLC-8rggQ-lDtatZPUFmsZyCmtMiW-DHvv3nKuUysqAL-WTZfCIVqpV0_Rkqg=w1820-h1364-no?authuser=0",
    img2:
      "https://lh3.googleusercontent.com/pw/ACtC-3dqiboBlCA38EDlF2KpNQluuAii0KlXdzPZINHTNSpkqb5QwIYvp-oIt2ZdzkQhsdSfW-quDqAN_88eUmssTTlxamAq3z7anfHYaO3xrF7fObvoe1Ia1kZfrEcbwdvPMcpx0-u9K8ktTMyqansAbOUeDg=w1820-h1364-no?authuser=0",
    img3:
      "https://lh3.googleusercontent.com/pw/ACtC-3fWRUEEauChT4ek0V1pWRqSqXm35HcfkXqtdbGm451esMwiCAabblgvX7fL6E4Kwvh6OrOyNhtUOQtIC4ttJyq8gd4RatSAzEmbA4SRYIqXpwy70X7YQwB7MN2LlAHGfh543aEBwRtS50uQvilyedHVUA=w1820-h1364-no?authuser=0",
    img4:
      "https://lh3.googleusercontent.com/pw/ACtC-3c2uL2X5HAf9e284rcXRz8bphwjJHU160kmLKh2IEuqJK6MjDIQyc4vynsaKVWSdR-Y13aLRVA8bvFRa0dcml3iWHGBKAPubKpx0t1wAmHAmouErVRQs0A_-c-20KlQp_BF_AtsbnYlq3BVFPCFOnb48w=w1820-h1364-no?authuser=0",
  },
];

const LittlePost = ({ date, caption, desc, img1, img2, img3, img4, video }) => {
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-wrapper__top">
          <div className="post-wrapper__top-left">
            <div className="avatar-wrapper">
              <img
                src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-1/p320x320/124354962_10218720359021816_6353348838620994993_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=6e6B7tHtFzoAX84aCz2&_nc_ht=scontent.fkul16-1.fna&tp=6&oh=6f4cbcbc701fb6a741aa08e7b5dc35fe&oe=5FD45B4F"
                className="avatar-wrapper__avatar"
                alt="avatar"
              />
            </div>
            <div className="avatar-info-wrapper">
              <div className="avatar-info-wrapper__name">Rong Zhao</div>
              <div className="avatar-info-wrapper__info">
                <div className="avatar-info-wrapper__info-time">{date}</div>
                <div className="avatar-info-wrapper__info-privacy">
                  <div className="global"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="post-wrapper__top-right">
            <div className="more-info-wrapper">
              <div className="more-info"></div>
            </div>
          </div>
        </div>
        <div class="text-header">{caption}</div>
        <div className="post-wrapper__sec-top">
          <div className="text">{ReactHtmlParser(desc)}</div>
        </div>
        {img1 && (
          <div className="post-wrapper__image-section">
            <div className="gallery">
              <div className="gallery__item gallery__item--1">
                <img src={img1} className="gallery__img" alt="" />
              </div>
            { img2 && 
                <div className="gallery__item gallery__item--2">
                <img src={img2} className="gallery__img" alt="" />
            </div>
            }
            { img3 && 
                <div className="gallery__item gallery__item--3">
                <img src={img3} className="gallery__img" alt="" />
            </div>
            }
            { img4 && 
                <div className="gallery__item gallery__item--4">
                    <img src={img4} className="gallery__img" alt="" />
                </div>
                }
            </div>
          </div>
        )}
        {video && (
          <div className="post-wrapper__video-section">
            <iframe
              title={video}
              width="100%"
              height="100%"
              src={video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
        <div className="post-wrapper__btm-section">
          <div className="like-section">
            {/* <div className="all-icon"> */}
            <div className="icon-wrapper one">
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                alt=""
                className="icons"
              />
            </div>
            <div className="icon-wrapper two">
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                alt=""
                className="icons"
              />
            </div>
            <div className="icon-wrapper three">
              <img
                src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                alt=""
                className="icons"
              />
            </div>
            {/* </div> */}
            <p>You and 520 others</p>
          </div>
          <div className="share-section">
            <p>520 Comments</p>
            <p>520 Share</p>
          </div>
        </div>
        <div className="post-wrapper__sec-btm-section">
          <div className="icon-wrapper">
            <div className="like liked"></div>
            <p class="liked">Like</p>
          </div>
          <div className="icon-wrapper">
            <div className="comment"> </div>
            <p>Comment</p>
          </div>
          <div className="icon-wrapper">
            <div className="share"> </div>
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const listItems = postList.map((obj) => (
  <LittlePost
    key={obj.name}
    date={obj.date}
    caption={obj.caption}
    desc={obj.desc}
    img1={obj.img1}
    img2={obj.img2}
    img3={obj.img3}
    img4={obj.img4}
    video={obj.video}
  />
));

export const Post = () => {
  return <>{listItems}</>;
};
