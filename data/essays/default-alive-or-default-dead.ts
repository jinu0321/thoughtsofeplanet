import { TranslatedEssay } from "@/lib/types";

export const defaultAliveOrDefaultDead: TranslatedEssay = {
    type: "translated",
    slug: "default-alive-or-default-dead",
    title: "Default Alive or Default Dead?",
    koreanTitle: "기본 생존인가, 기본 사망인가?",
    date: "October 2015",
    author: "Paul Graham",
    paragraphs: [
        {
            english:
                "When I talk to a startup that's been operating for more than 8 or 9 months, the first thing I want to know is almost always the same. Assuming their expenses remain constant and their revenue growth is what it has been over the last several months, do they make it to profitability on the money they have left? Or to put it more dramatically, by default do they live or die?",
            korean: "8~9개월 이상 운영된 스타트업과 이야기할 때 내가 가장 먼저 알고 싶은 것은 거의 항상 똑같다. 비용이 일정하게 유지되고 지난 몇 달간의 매출 성장이 지속된다고 가정할 때, 남은 돈으로 수익성을 달성할 수 있을까? 아니면 더 극적으로 표현해서, 기본적으로 살 것인가 죽을 것인가?",
        },
        {
            english:
                "The startling thing is how often the founders themselves don't know. Half the founders I talk to don't know whether they're default alive or default dead. If you're among that number, Trevor Blackwell has made a handy calculator you can use to find out.",
            korean: "놀라운 점은 창업가들 스스로도 이 사실을 모르는 경우가 너무나 많다는 것이다. 내가 이야기하는 창업가들의 절반은 자신들이 기본 생존 상태인지 기본 사망 상태인지 알지 못한다. 만약 당신도 그렇다면, 트레버 블랙웰(Trevor Blackwell)이 만든 편리한 계산기를 사용해 알아볼 수 있다.",
        },
        {
            english:
                "The reason I want to know first whether a startup is default alive or default dead is that the rest of the conversation depends on the answer. If the company is default alive, we can talk about ambitious new things they could do. If it's default dead, we probably need to talk about how to save it. We know the current trajectory ends badly. How can they get off that trajectory?",
            korean: "내가 스타트업이 기본 생존 상태인지 기본 사망 상태인지를 먼저 알고 싶어 하는 이유는 나머지 대화가 그 답에 따라 달라지기 때문이다. 회사가 기본 생존 상태라면 야심 찬 새로운 일에 대해 이야기할 수 있다. 기본 사망 상태라면 어떻게 회사를 살릴지에 대해 이야기해야 할 것이다. 현재 궤적이 나쁜 결말로 이어진다는 것을 알고 있으니, 어떻게 그 궤도에서 벗어날 수 있을까?",
        },
        {
            english:
                "Why do so few founders know whether they're default alive or default dead? Mainly, I think, because they're not used to asking that. It's not a question that makes sense to ask early on, any more than it makes sense to ask a 3 year old how he plans to support himself. But as the company grows older, the question switches from meaningless to critical. That kind of switch often takes people by surprise.",
            korean: "왜 그렇게 적은 수의 창업가들만이 자신들이 기본 생존 상태인지 기본 사망 상태인지 알고 있을까? 주로 그들이 그런 질문을 하는 데 익숙하지 않기 때문이라고 생각한다. 3살짜리 아이에게 어떻게 자립할 계획인지 묻는 것이 말이 안 되는 것처럼, 초기 단계에서는 의미가 없는 질문이다. 하지만 회사가 성장함에 따라 그 질문은 의미 없는 것에서 치명적으로 중요한 것으로 바뀐다. 그런 종류의 전환은 종종 사람들을 놀라게 한다.",
        },
        {
            english:
                "I propose the following solution: instead of starting to ask too late whether you're default alive or default dead, start asking too early. It's hard to say precisely when the question switches polarity. But it's probably not that dangerous to start worrying too early that you're default dead, whereas it's very dangerous to start worrying too late.",
            korean: "나는 다음과 같은 해결책을 제안한다: 기본 생존 상태인지 기본 사망 상태인지 너무 늦게 묻기 시작하는 대신, 너무 일찍 묻기 시작하라. 질문의 극성이 언제 바뀌는지 정확히 말하기는 어렵다. 하지만 기본 사망 상태일까 봐 너무 일찍 걱정하기 시작하는 것은 그다지 위험하지 않을 것이지만, 너무 늦게 걱정하기 시작하는 것은 매우 위험하다.",
        },
        {
            english:
                "The reason is a phenomenon I wrote about earlier: the fatal pinch. The fatal pinch is default dead + slow growth + not enough time to fix it. And the way founders end up in it is by not realizing that's where they're headed.",
            korean: "그 이유는 내가 이전에 썼던 현상, 바로 '치명적인 덫(fatal pinch)' 때문이다. 치명적인 덫은 기본 사망 + 느린 성장 + 문제를 해결할 시간 부족의 조합이다. 그리고 창업가들이 여기에 빠지는 이유는 자신이 그곳으로 향하고 있다는 것을 깨닫지 못하기 때문이다.",
        },
        {
            english:
                "There is another reason founders don't ask themselves whether they're default alive or default dead: they assume it will be easy to raise more money. But that assumption is often false, and worse still, the more you depend on it, the falser it becomes.",
            korean: "창업가들이 스스로에게 기본 생존 상태인지 기본 사망 상태인지 묻지 않는 또 다른 이유가 있다: 그들은 더 많은 돈을 투자받는 것이 쉬울 것이라고 가정한다. 하지만 그 가정은 종종 틀리며, 설상가상으로 그 가정에 더 많이 의존할수록 더욱 틀린 것이 된다.",
        },
        {
            english:
                "Maybe it will help to separate facts from hopes. Instead of thinking of the future with vague optimism, explicitly separate the components. Say \"We're default dead, but we're counting on investors to save us.\" Maybe as you say that, it will set off the same alarms in your head that it does in mine. And if you set off the alarms sufficiently early, you may be able to avoid the fatal pinch.",
            korean: '어쩌면 사실과 희망을 분리하는 것이 도움이 될지도 모른다. 막연한 낙관주의로 미래를 생각하는 대신, 구성 요소들을 명시적으로 분리하라. "우리는 기본 사망 상태이지만, 투자자들이 우리를 구해줄 것이라고 믿고 있다"라고 말해보라. 어쩌면 그렇게 말하는 순간, 내 머릿속에서 울리는 것과 같은 경고음이 당신의 머릿속에서도 울릴 것이다. 그리고 충분히 일찍 경고음을 울린다면, 치명적인 덫을 피할 수 있을지도 모른다.',
        },
        {
            english:
                "It would be safe to be default dead if you could count on investors saving you. As a rule their interest is a function of growth. If you have steep revenue growth, say over 5x a year, you can start to count on investors being interested even if you're not profitable. [1](Steep usage growth will also interest investors. Revenue will ultimately be a constant multiple of usage, so x% usage growth predicts x% revenue growth. But in practice investors discount merely predicted revenue, so if you're measuring usage you need a higher growth rate to impress investors.) But investors are so fickle that you can never do more than start to count on them. Sometimes something about your business will spook investors even if your growth is great. So no matter how good your growth is, you can never safely treat fundraising as more than a plan A. You should always have a plan B as well: you should know (as in write down) precisely what you'll need to do to survive if you can't raise more money, and precisely when you'll have to switch to plan B if plan A isn't working.",
            korean: "투자자들이 당신을 구해줄 것이라고 확신할 수 있다면 기본 사망 상태여도 안전할 것이다. 일반적으로 그들의 관심은 성장의 함수다. 만약 당신이 연간 5배 이상의 가파른 매출 성장을 하고 있다면, 수익성이 없더라도 투자자들이 관심을 가질 것이라고 기대하기 시작할 수 있다. [1](가파른 사용자 증가는 투자자들의 관심을 끌 것이다. 매출은 궁극적으로 사용자 수의 상수 배가 될 것이므로, x%의 사용자 증가는 x%의 매출 증가를 예측한다. 하지만 실제로는 투자자들이 단지 예측된 매출은 할인해서 보기 때문에, 사용자 수를 측정하고 있다면 투자자들에게 깊은 인상을 주려면 더 높은 성장률이 필요하다.) 하지만 투자자들은 너무 변덕스러워서 그들에게 기대하기 시작하는 것 이상은 절대 할 수 없다. 때로는 사업 성장이 훌륭하더라도 당신의 사업에 관한 무언가가 투자자들을 불안하게 만들 수 있다. 따라서 성장이 아무리 좋아도 자금 조달을 계획 A 이상으로 안전하게 취급할 수는 없다. 항상 계획 B도 가지고 있어야 한다: 더 많은 돈을 투자받지 못할 경우 생존하기 위해 정확히 무엇을 해야 하는지, 그리고 계획 A가 작동하지 않을 경우 정확히 언제 계획 B로 전환해야 하는지 (적어두는 것처럼) 알아야 한다.",
        },
        {
            english:
                "In any case, growing fast versus operating cheaply is far from the sharp dichotomy many founders assume it to be. In practice there is surprisingly little connection between how much a startup spends and how fast it grows. When a startup grows fast, it's usually because the product hits a nerve, in the sense of hitting some big need straight on. When a startup spends a lot, it's usually because the product is expensive to develop or sell, or simply because they're wasteful.",
            korean: "어쨌든, 빠르게 성장하는 것과 저렴하게 운영하는 것은 많은 창업가들이 가정하는 것처럼 날카로운 이분법과는 거리가 멀다. 실제로는 스타트업이 얼마나 많이 지출하는지와 얼마나 빨리 성장하는지 사이에는 놀라울 정도로 거의 연관성이 없다. 스타트업이 빠르게 성장할 때는 보통 제품이 어떤 큰 요구를 정통으로 맞춰 신경을 건드렸기(hit a nerve) 때문이다. 스타트업이 돈을 많이 쓸 때는 보통 제품 개발이나 판매 비용이 비싸거나 단순히 낭비가 심하기 때문이다.",
        },
        {
            english:
                "If you're paying attention, you'll be asking at this point not just how to avoid the fatal pinch, but how to avoid being default dead. That one is easy: don't hire too fast. Hiring too fast is by far the biggest killer of startups that raise money. [2](Startups that don't raise money are saved from hiring too fast because they can't afford to. But that doesn't mean you should avoid raising money in order to avoid this problem, any more than that total abstinence is the only way to avoid becoming an alcoholic.)",
            korean: "만약 당신이 주의를 기울이고 있다면, 이 시점에서 치명적인 덫을 피하는 방법뿐만 아니라 기본 사망 상태를 피하는 방법에 대해서도 묻고 있을 것이다. 그것은 쉽다: 너무 빨리 고용하지 마라. 너무 빠른 고용은 돈을 투자받은 스타트업을 죽이는 가장 큰 원인이다. [2](돈을 투자받지 않는 스타트업은 감당할 수 없기 때문에 너무 빨리 고용하는 것으로부터 보호받는다. 하지만 이것이 이 문제를 피하기 위해 돈을 투자받는 것을 피해야 한다는 의미는 아니다. 마치 완전한 금주만이 알코올 중독자가 되는 것을 피하는 유일한 방법이 아니라는 것과 같다.)",
        },
        {
            english:
                "Founders tell themselves they need to hire in order to grow. But most err on the side of overestimating this need rather than underestimating it. Why? Partly because there's so much work to do. Naive founders think that if they can just hire enough people, it will all get done. Partly because successful startups have lots of employees, so it seems like that's what one does in order to be successful. In fact the large staffs of successful startups are probably more the effect of growth than the cause. And partly because when founders have slow growth they don't want to face what is usually the real reason: the product is not appealing enough.",
            korean: "창업가들은 성장하기 위해 고용해야 한다고 스스로에게 말한다. 하지만 대부분은 이 필요성을 과소평가하기보다는 과대평가하는 실수를 저지른다. 왜 그럴까? 부분적으로는 할 일이 너무 많기 때문이다. 순진한 창업가들은 충분한 사람을 고용하기만 하면 모든 일이 처리될 것이라고 생각한다. 부분적으로는 성공한 스타트업에는 많은 직원이 있기 때문에 성공하기 위해서는 그렇게 해야 하는 것처럼 보이기 때문이다. 사실 성공한 스타트업의 많은 직원은 아마도 성장의 원인이라기보다는 결과일 것이다. 그리고 부분적으로는 창업가들이 성장이 느릴 때 보통 진짜 이유인 제품이 충분히 매력적이지 않다는 사실에 직면하고 싶어 하지 않기 때문이다.",
        },
        {
            english:
                "Plus founders who've just raised money are often encouraged to overhire by the VCs who funded them. Kill-or-cure strategies are optimal for VCs because they're protected by the portfolio effect. VCs want to blow you up, in one sense of the phrase or the other. But as a founder your incentives are different. You want above all to survive. [3](I would not be surprised if VCs' tendency to push founders to overhire is not even in their own interest. They don't know how many of the companies that get killed by overspending might have done well if they'd survived. My guess is a significant number.)",
            korean: "게다가 이제 막 돈을 투자받은 창업가들은 종종 그들에게 자금을 지원한 VC들로부터 과잉 고용을 권장받는다. 죽기 아니면 살기(Kill-or-cure) 전략은 포트폴리오 효과로 보호받기 때문에 VC들에게 최적이다. VC들은 어떤 의미에서든 당신을 폭파시키고(blow you up, 크게 성공시키거나 망하게 하거나) 싶어 한다. 하지만 창업가로서 당신의 인센티브는 다르다. 당신은 무엇보다도 생존하기를 원한다. [3](VC들이 창업가들에게 과잉 고용을 부추기는 경향이 심지어 그들 자신의 이익에도 부합하지 않는다고 해도 놀랍지 않을 것이다. 그들은 과도한 지출로 죽은 회사들 중 얼마나 많은 회사가 살아남았다면 잘 해냈을지 모른다. 내 생각에는 상당수일 것이다.)",
        },
        {
            english:
                "Here's a common way startups die. They make something moderately appealing and have decent initial growth. They raise their first round fairly easily, because the founders seem smart and the idea sounds plausible. But because the product is only moderately appealing, growth is ok but not great. The founders convince themselves that hiring a bunch of people is the way to boost growth. Their investors agree. But (because the product is only moderately appealing) the growth never comes. Now they're rapidly running out of runway. They hope further investment will save them. But because they have high expenses and slow growth, they're now unappealing to investors. They're unable to raise more, and the company dies.",
            korean: "스타트업이 죽는 일반적인 방법은 다음과 같다. 그들은 적당히 매력적인 것을 만들고 괜찮은 초기 성장을 한다. 창업가들이 똑똑해 보이고 아이디어가 그럴듯하게 들리기 때문에 첫 번째 투자 라운드를 상당히 쉽게 유치한다. 하지만 제품이 단지 적당히 매력적이기 때문에 성장은 괜찮지만 훌륭하지는 않다. 창업가들은 많은 사람을 고용하는 것이 성장을 촉진하는 방법이라고 스스로를 설득한다. 그들의 투자자들도 동의한다. 하지만 (제품이 단지 적당히 매력적이기 때문에) 성장은 결코 오지 않는다. 이제 그들은 빠르게 자금이 바닥나고 있다. 그들은 추가 투자가 자신들을 구해줄 것이라고 희망한다. 하지만 비용이 많이 들고 성장이 느리기 때문에 이제 투자자들에게 매력적이지 않다. 그들은 더 많은 투자를 유치할 수 없고 회사는 죽는다.",
        },
        {
            english:
                'What the company should have done is address the fundamental problem: that the product is only moderately appealing. Hiring people is rarely the way to fix that. More often than not it makes it harder. At this early stage, the product needs to evolve more than to be "built out," and that\'s usually easier with fewer people. [4](After reading a draft, Sam Altman wrote: "I think you should make the hiring point more strongly. I think it\'s roughly correct to say that YC\'s most successful companies have never been the fastest to hire, and one of the marks of a great founder is being able to resist this urge." Paul Buchheit adds: "A related problem that I see a lot is premature scaling—founders take a small business that isn\'t really working (bad unit economics, typically) and then scale it up because they want impressive growth numbers. This is similar to over-hiring in that it makes the business much harder to fix once it\'s big, plus they are bleeding cash really fast.")',
            korean: '회사가 했어야 할 일은 근본적인 문제, 즉 제품이 단지 적당히 매력적이라는 점을 해결하는 것이었다. 사람들을 고용하는 것은 거의 그 문제를 해결하는 방법이 아니다. 오히려 더 어렵게 만드는 경우가 많다. 이 초기 단계에서는 제품이 "구축되는(built out)" 것보다 더 많이 진화해야 하며, 이는 보통 더 적은 사람들과 함께하는 것이 더 쉽다. [4](초고를 읽은 후 샘 알트만(Sam Altman)은 다음과 같이 썼다: "채용에 대한 부분을 더 강력하게 만들어야 한다고 생각합니다. YC의 가장 성공적인 회사들이 결코 가장 빨리 채용하지 않았다는 것은 거의 정확한 말이며, 위대한 창업가의 특징 중 하나는 이러한 충동에 저항할 수 있다는 것입니다." 폴 부케이트(Paul Buchheit)는 다음과 같이 덧붙였다: "제가 많이 보는 관련된 문제는 너무 이른 확장(premature scaling)입니다. 창업가들은 실제로 작동하지 않는 작은 사업(일반적으로 나쁜 단위 경제성)을 가지고 인상적인 성장 수치를 원하기 때문에 확장합니다. 이는 사업이 커지면 수정하기 훨씬 더 어려워지고 현금도 매우 빠르게 소진된다는 점에서 과잉 고용과 유사합니다.")',
        },
        {
            english:
                "Asking whether you're default alive or default dead may save you from this. Maybe the alarm bells it sets off will counteract the forces that push you to overhire. Instead you'll be compelled to seek growth in other ways. For example, by doing things that don't scale, or by redesigning the product in the way only founders can. And for many if not most startups, these paths to growth will be the ones that actually work.",
            korean: "기본 생존 상태인지 기본 사망 상태인지 묻는 것이 당신을 이로부터 구할 수 있을지도 모른다. 어쩌면 그것이 울리는 경고음이 당신을 과잉 고용으로 밀어붙이는 힘에 대응할 것이다. 대신 당신은 다른 방식으로 성장을 추구하도록 강요받을 것이다. 예를 들어, 확장되지 않는 일(things that don't scale)을 하거나 창업가만이 할 수 있는 방식으로 제품을 재설계함으로써 말이다. 그리고 대부분의 스타트업에게는 아니더라도 많은 스타트업에게 이러한 성장 경로가 실제로 효과가 있을 것이다.",
        },
        {
            english:
                "Airbnb waited 4 months after raising money at the end of Y Combinator before they hired their first employee. In the meantime the founders were terribly overworked. But they were overworked evolving Airbnb into the astonishingly successful organism it is now.",
            korean: "에어비앤비(Airbnb)는 Y 콤비네이터(Y Combinator)가 끝날 무렵 자금을 투자받은 후 첫 직원을 고용하기까지 4개월을 기다렸다. 그동안 창업가들은 엄청나게 과로했다. 하지만 그들은 에어비앤비를 지금의 놀랍도록 성공적인 유기체로 진화시키느라 과로했던 것이다.",
        },
    ],
};
