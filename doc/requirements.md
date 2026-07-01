# Requirements

## 1. Overview

Replicant Wake 是一个 `other` 类型的移动端小游戏：2089 高端定制陪伴 replicant 在化妆台前度过她'第一次成为人'的午夜。5 个全息物件,5 段她说出口的台词。她不知道——每句话都是别人记忆的复制。Climax 让你选她接下来变成谁。AlterU After Dark FMV 第 2 作。

## 2. Visual Design

- 整体布局：页面占用 100vw x 100vh，主体验居中，HUD 与操作区覆盖在游戏层上方，移动端以单手操作为优先。
- 背景与配色：主要颜色使用 #000、rgba(0, 0, 0, 0.95)、#f4ecdf、#060815、#d4f0ff、#6aa3c9、#ff3399、#00d4ff；高亮元素用于可点击目标、得分、结果或稀有状态。
- 字体：使用 'Cormorant Garamond', ui-serif, Georgia, 'Times New Roman', serif、'SF Mono', 'JetBrains Mono', 'Menlo', monospace、'Cormorant Garamond', ui-serif, Georgia, serif、inherit，按钮与状态文字保持 12-24 px 的可读范围。
- 动画：常规按钮/卡片反馈控制在 120-240 ms；结果、命中、生成或翻牌反馈控制在 300-900 ms。
- 视觉元素：主对象保持在屏幕中心 40%-65% 视觉区域内；顶部/底部 HUD 保留至少 12 px 安全边距；可滚动墙或列表卡片使用固定间距，避免文本挤压。
- 美术素材清单：
- clip_01_cigarette.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_05_mirror_eyes.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_05_hologram.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_06_climax_wake.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_03_lipstick.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_04_pearls.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_03_serum.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_01_compact.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_02_earring.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_06_climax.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_04_holder.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。
- clip_02_martini.mp4：视频素材，用于角色、场景、封面、反馈或品牌视觉。

## 3. Game Mechanics

- 初始化参数：
- `SUBTITLE_DELAY_MS`：900
- `HOLD_AFTER_END_MS`：2400
- `VIDEO_FADE_MS`：900
- `CLIMAX_SUBTITLE_DELAY_MS`：4400
- `REVELATION_HOLD_MS`：4500
- 更新循环：使用定时器推进倒计时、生成节奏或阶段切换。
- 核心机制：玩家完成主操作后更新分数、阶段、生成结果或收藏状态；反馈必须在 200 ms 内出现。
- 碰撞 / 命中：若存在运动目标，使用目标边界、距离或格子索引判断；命中后更新得分/连击，失误后扣除生命、时间或进入失败状态。
- 特殊机制：以单人即时游玩或本地结果展示为主。 不依赖 AI 生成作为每局必需结果。
- 粒子 / 特效：命中、完成、生成、失败等关键事件使用上浮文字、闪光、缩放、抖动或淡出效果，单次特效 300-900 ms。

## 4. Controls

- Pointer：按下主操作区立即触发核心动作，单次 pointerdown 只计算 1 次。
- Drag / Move：记录指针坐标变化，用于拖拽、瞄准、绘制或移动角色。

## 5. Win / Lose Conditions

- 倒计时结束触发结算。
- 结算界面展示最终结果、历史最好或收藏结果，并提供再来一次、返回首页或继续浏览入口。

## 6. Sound Effects

- 主操作成功：当前实现未接入音频输出，音效时长 0 ms，以视觉反馈替代。
- 失败或结束：当前实现未接入音频输出，音效时长 0 ms，以结算画面替代。
- UI 切换：当前实现未接入音频输出，音效时长 0 ms。
