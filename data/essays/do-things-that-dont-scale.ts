import { TranslatedEssay } from "@/lib/types";

export const doThingsThatDontScale: TranslatedEssay = {
    type: "translated",
    slug: "do-things-that-dont-scale",
    title: "Do Things That Don't Scale",
    koreanTitle: "확장되지 않는 일들을 하라",
    date: "July 2013",
    author: "Paul Graham",
    paragraphs: [
        {
            english:
                "One of the most common types of advice we give at Y Combinator is to do things that don't scale. A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist. [1]",
            korean: 'Y Combinator에서 우리가 가장 흔하게 하는 조언 중 하나는 확장되지 않는 일을 하라는 것입니다. 많은 예비 창업가들은 스타트업이 성공하거나 실패하거나 둘 중 하나라고 믿습니다. 무언가를 만들고, 사용할 수 있게 만들면, 더 나은 쥐덫을 만들었다면 사람들이 약속대로 문전성시를 이룰 것이라고 생각합니다. 그렇지 않다면 시장이 존재하지 않는 것이겠죠. [1](사실 에머슨은 쥐덫을 구체적으로 언급하지 않았습니다. 그는 다음과 같이 썼습니다. "만약 어떤 사람이 좋은 옥수수나 나무, 판자, 돼지를 팔거나, 다른 누구보다 더 나은 의자나 칼, 도가니, 교회 오르간을 만들 수 있다면, 그의 집이 숲 속에 있더라도 넓고 잘 닦인 길이 그의 집으로 이어질 것입니다.")',
        },
        {
            english:
                "Actually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.",
            korean: "사실 스타트업은 창업자들이 성공시키기 때문에 성공합니다. 저절로 성장한 스타트업이 소수 있을지는 모르지만, 보통은 시작하려면 어느 정도의 노력이 필요합니다. 좋은 비유는 자동차 엔진이 전기 시동 장치를 갖기 전에 사용했던 크랭크입니다. 일단 엔진이 작동하기 시작하면 계속 돌아가지만, 작동시키기까지는 별도의 힘든 과정이 있었습니다.",
        },
        {
            english:
                "Recruit\n\nThe most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them.",
            korean: "모집하라\n\n창업자들이 초기에 해야 하는 가장 일반적인 확장 불가능한 일은 수동으로 사용자를 모집하는 것입니다. 거의 모든 스타트업이 그래야 합니다. 사용자가 당신에게 오기를 기다릴 수 없습니다. 직접 나가서 사용자를 확보해야 합니다.",
        },
        {
            english:
                "Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.",
            korean: "스트라이프(Stripe)는 우리가 투자한 가장 성공적인 스타트업 중 하나이며, 그들이 해결한 문제는 시급한 것이었습니다. 만약 누군가가 가만히 앉아서 사용자를 기다릴 수 있었다면, 그건 스트라이프였을 것입니다. 하지만 사실 그들은 YC 내에서 공격적인 초기 사용자 확보로 유명합니다.",
        },
        {
            english:
                'Startups building things for other startups have a big pool of potential users in the other companies we\'ve funded, and none took better advantage of it than Stripe. At YC we use the term "Collison installation" for the technique they invented. More diffident founders ask "Will you try our beta?" and if the answer is yes, they say "Great, we\'ll send you a link." But the Collison brothers weren\'t going to wait. When anyone agreed to try Stripe they\'d say "Right then, give me your laptop" and set them up on the spot.',
            korean: '다른 스타트업을 위한 제품을 만드는 스타트업들은 우리가 투자한 다른 회사들 중에 잠재 사용자 풀이 큽니다. 그리고 스트라이프만큼 이를 잘 활용한 곳은 없습니다. YC에서는 그들이 발명한 기술을 "콜리슨 설치(Collison installation)"라고 부릅니다. 더 소극적인 창업자들은 "저희 베타 버전 사용해 보시겠어요?"라고 묻고, 대답이 \'예\'이면 "좋아요, 링크 보내드릴게요."라고 말합니다. 하지만 콜리슨 형제는 기다리지 않았습니다. 누군가가 스트라이프를 사용해 보기로 동의하면, 그들은 "그럼요, 노트북 주세요"라고 말하고 그 자리에서 바로 설치해주었습니다.',
        },
        {
            english:
                "There are two reasons founders resist going out and recruiting users individually. One is a combination of shyness and laziness. They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them. But for a startup to succeed, at least one founder (usually the CEO) will have to spend a lot of time on sales and marketing. [2]",
            korean: "창업자들이 직접 나가서 개별적으로 사용자를 모집하는 것을 꺼리는 데에는 두 가지 이유가 있습니다. 하나는 수줍음과 게으름의 조합입니다. 그들은 밖에 나가서 낯선 사람들에게 말을 걸고 대부분 거절당하는 것보다 집에서 코딩하는 것을 선호합니다. 하지만 스타트업이 성공하려면, 적어도 한 명의 창업자(보통 CEO)는 영업과 마케팅에 많은 시간을 할애해야 합니다. [2](이 점을 명확히 하도록 제안해준 샘 알트만에게 감사합니다. 그리고 아니요, 영업을 대신해 줄 사람을 고용해서 영업을 피할 수는 없습니다. 처음에는 직접 영업을 해야 합니다. 나중에 당신을 대신할 진짜 영업 사원을 고용할 수 있습니다.)",
        },
        {
            english:
                "The other reason founders ignore this path is that the absolute numbers seem so small at first. This can't be how the big, famous startups got started, they think. The mistake they make is to underestimate the power of compound growth. We encourage every startup to measure their progress by weekly growth rate. If you have 100 users, you need to get 10 more next week to grow 10% a week. And while 110 may not seem much better than 100, if you keep growing at 10% a week you'll be surprised how big the numbers get. After a year you'll have 14,000 users, and after 2 years you'll have 2 million.",
            korean: "창업자들이 이 경로를 무시하는 또 다른 이유는 처음에는 절대적인 숫자가 너무 작아 보이기 때문입니다. 그들은 이것이 크고 유명한 스타트업들이 시작한 방식일 리 없다고 생각합니다. 그들이 저지르는 실수는 복리 성장의 힘을 과소평가하는 것입니다. 우리는 모든 스타트업이 주간 성장률로 진행 상황을 측정하도록 권장합니다. 사용자가 100명이라면 다음 주에 10명을 더 확보해야 주당 10% 성장하는 것입니다. 110명이 100명보다 훨씬 나아 보이지 않을 수도 있지만, 주당 10%씩 계속 성장하면 숫자가 얼마나 커지는지 놀라게 될 것입니다. 1년 후에는 14,000명의 사용자를, 2년 후에는 2백만 명의 사용자를 갖게 될 것입니다.",
        },
        {
            english:
                "You'll be doing different things when you're acquiring users a thousand at a time, and growth has to slow down eventually. But if the market exists you can usually start by recruiting users manually and then gradually switch to less manual methods. [3]",
            korean: '한 번에 수천 명의 사용자를 확보할 때는 다른 일을 하게 될 것이고, 성장은 결국 둔화되어야 합니다. 하지만 시장이 존재한다면 보통 수동으로 사용자를 모집하는 것부터 시작한 다음 점차 덜 수동적인 방법으로 전환할 수 있습니다. [3](이것이 작동하는 이유는 규모가 커짐에 따라 규모 자체가 성장에 도움이 되기 때문입니다. 패트릭 콜리슨은 "어느 순간, 스트라이프가 느껴지는 방식에 매우 눈에 띄는 변화가 있었습니다. 우리가 밀어야 했던 바위에서 자체 추진력을 가진 기차 칸으로 바뀌었습니다."라고 썼습니다.)',
        },
        {
            english:
                "Airbnb is a classic example of this technique. Marketplaces are so hard to get rolling that you should expect to take heroic measures at first. In Airbnb's case, these consisted of going door to door in New York, recruiting new users and helping existing ones improve their listings. When I remember the Airbnbs during YC, I picture them with rolly bags, because when they showed up for tuesday dinners they'd always just flown back from somewhere.",
            korean: "에어비앤비(Airbnb)는 이 기술의 전형적인 예입니다. 마켓플레이스는 시작하기가 너무 어려워서 처음에는 영웅적인 조치를 취해야 할 것으로 예상해야 합니다. 에어비앤비의 경우, 뉴욕에서 집집마다 방문하여 신규 사용자를 모집하고 기존 사용자가 리스팅을 개선하도록 돕는 것이었습니다. YC 시절의 에어비앤비를 기억할 때면, 바퀴 달린 가방을 든 모습이 떠오릅니다. 왜냐하면 화요일 저녁 식사에 나타날 때면 항상 어딘가에서 막 비행기를 타고 돌아왔기 때문입니다.",
        },
        {
            english:
                "Fragile\n\nAirbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.",
            korean: "취약함\n\n에어비앤비는 이제 막을 수 없는 거대한 힘처럼 보이지만, 초기에는 너무 취약해서 약 30일 동안 직접 사용자를 찾아가 만나 참여시킨 것이 성공과 실패를 갈랐습니다.",
        },
        {
            english:
                "That initial fragility was not a unique feature of Airbnb. Almost all startups are fragile initially. And that's one of the biggest things inexperienced founders and investors (and reporters and know-it-alls on forums) get wrong about them. They unconsciously judge larval startups by the standards of established ones. They're like someone looking at a newborn baby and concluding \"there's no way this tiny creature could ever accomplish anything.\"",
            korean: '그 초기 취약성은 에어비앤비만의 특징이 아니었습니다. 거의 모든 스타트업은 초기에 취약합니다. 그리고 이것이 경험 없는 창업자들과 투자자들(그리고 기자들과 포럼의 아는 체하는 사람들)이 스타트업에 대해 잘못 알고 있는 가장 큰 것 중 하나입니다. 그들은 무의식적으로 초기 단계의 스타트업을 기존의 성공한 회사들의 기준으로 판단합니다. 마치 갓난아기를 보면서 "이 작은 생명체가 무언가를 성취할 방법이 없어"라고 결론짓는 사람과 같습니다.',
        },
        {
            english:
                "It's harmless if reporters and know-it-alls dismiss your startup. They always get things wrong. It's even ok if investors dismiss your startup; they'll change their minds when they see growth. The big danger is that you'll dismiss your startup yourself. I've seen it happen. I often have to encourage founders who don't see the full potential of what they're building. Even Bill Gates made that mistake. He returned to Harvard for the fall semester after starting Microsoft. He didn't stay long, but he wouldn't have returned at all if he'd realized Microsoft was going to be even a fraction of the size it turned out to be. [4]",
            korean: "기자들과 아는 체하는 사람들이 당신의 스타트업을 무시하는 것은 해롭지 않습니다. 그들은 항상 틀립니다. 투자자들이 당신의 스타트업을 무시해도 괜찮습니다. 성장을 보면 그들은 마음을 바꿀 것입니다. 가장 큰 위험은 당신 스스로 당신의 스타트업을 무시하는 것입니다. 그런 경우를 본 적이 있습니다. 자신이 만들고 있는 것의 잠재력을 제대로 보지 못하는 창업자들을 격려해야 할 때가 많습니다. 빌 게이츠조차도 그런 실수를 저질렀습니다. 그는 마이크로소프트를 시작한 후 가을 학기에 하버드로 돌아갔습니다. 오래 머물지는 않았지만, 마이크로소프트가 현재 규모의 일부라도 될 것이라고 깨달았다면 전혀 돌아가지 않았을 것입니다. [4](YC가 창업자들을 도울 수 있는 더 미묘한 방법 중 하나는 그들의 야망을 조정해주는 것입니다. 왜냐하면 우리는 수많은 성공적인 스타트업들이 막 시작했을 때 어떤 모습이었는지 정확히 알고 있기 때문입니다.)",
        },
        {
            english:
                'The question to ask about an early stage startup is not "is this company taking over the world?" but "how big could this company get if the founders did the right things?" And the right things often seem both laborious and inconsequential at the time. Microsoft can\'t have seemed very impressive when it was just a couple guys in Albuquerque writing Basic interpreters for a market of a few thousand hobbyists (as they were then called), but in retrospect that was the optimal path to dominating microcomputer software. And I know Brian Chesky and Joe Gebbia didn\'t feel like they were en route to the big time as they were taking "professional" photos of their first hosts\' apartments. They were just trying to survive. But in retrospect that too was the optimal path to dominating a big market.',
            korean: '초기 단계의 스타트업에 대해 물어봐야 할 질문은 "이 회사가 세상을 정복하고 있는가?"가 아니라 "창업자들이 올바른 일을 한다면 이 회사가 얼마나 커질 수 있을까?"입니다. 그리고 올바른 일들은 당시에는 힘들고 사소해 보일 때가 많습니다. 마이크로소프트가 앨버커키에서 몇몇 사람들이 당시에는 취미활동가(hobbyists)라고 불렸던 수천 명의 시장을 위해 베이직(Basic) 인터프리터를 작성하고 있을 때는 그다지 인상적으로 보이지 않았을 것입니다. 하지만 돌이켜보면 그것이 마이크로컴퓨터 소프트웨어 시장을 지배하는 최적의 경로였습니다. 그리고 저는 브라이언 체스키와 조 게비아가 첫 호스트들의 아파트 "전문적인" 사진을 찍으면서 큰 성공으로 가는 길에 있다고 느끼지 않았다는 것을 압니다. 그들은 단지 살아남으려고 노력했을 뿐입니다. 하지만 돌이켜보면 그것 또한 큰 시장을 지배하는 최적의 경로였습니다.',
        },
        {
            english:
                "How do you find users to recruit manually? If you build something to solve your own problems, then you only have to find your peers, which is usually straightforward. Otherwise you'll have to make a more deliberate effort to locate the most promising vein of users. The usual way to do that is to get some initial set of users by doing a comparatively untargeted launch, and then to observe which kind seem most enthusiastic, and seek out more like them. For example, Ben Silbermann noticed that a lot of the earliest Pinterest users were interested in design, so he went to a conference of design bloggers to recruit users, and that worked well. [5]",
            korean: "수동으로 모집할 사용자를 어떻게 찾을 수 있을까요? 만약 당신 자신의 문제를 해결하기 위해 무언가를 만든다면, 동료들을 찾기만 하면 되는데, 이는 보통 간단합니다. 그렇지 않다면 가장 유망한 사용자 그룹을 찾기 위해 더 의도적인 노력을 기울여야 합니다. 이를 수행하는 일반적인 방법은 비교적 목표가 정해지지 않은 출시를 통해 초기 사용자 그룹을 확보한 다음, 어떤 유형의 사용자가 가장 열성적인지 관찰하고 그들과 비슷한 사람들을 더 많이 찾는 것입니다. 예를 들어, 벤 실버만은 초창기 핀터레스트(Pinterest) 사용자의 상당수가 디자인에 관심이 있다는 것을 알아채고 디자인 블로거 컨퍼런스에 가서 사용자를 모집했고, 이는 효과가 좋았습니다. [5](만약 관찰할 소규모 사용자 그룹을 쉽게 확보할 수 없는 것, 예를 들어 엔터프라이즈 소프트웨어를 만들고 있고, 아무런 인맥이 없는 분야라면, 콜드콜과 소개에 의존해야 할 것입니다. 하지만 그런 아이디어로 작업해야 할까요?)",
        },
        {
            english:
                "Delight\n\nYou should take extraordinary measures not just to acquire users, but also to make them happy. For as long as they could (which turned out to be surprisingly long), Wufoo sent each new user a hand-written thank you note. Your first users should feel that signing up with you was one of the best choices they ever made. And you in turn should be racking your brains to think of new ways to delight them.",
            korean: "기쁨을 선사하라\n\n사용자를 확보하는 것뿐만 아니라 그들을 행복하게 만들기 위해서도 특별한 조치를 취해야 합니다. 가능한 한 오랫동안(놀랍게도 꽤 오랫동안 지속되었습니다), 우푸(Wufoo)는 각 신규 사용자에게 손으로 쓴 감사 편지를 보냈습니다. 첫 사용자들은 당신과 함께 가입한 것이 그들이 내린 최고의 선택 중 하나였다고 느껴야 합니다. 그리고 당신은 그들을 기쁘게 할 새로운 방법을 생각해내기 위해 머리를 싸매야 합니다.",
        },
        {
            english:
                "Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.",
            korean: "왜 우리가 스타트업에게 이것을 가르쳐야 할까요? 왜 이것이 창업자들에게 직관에 반하는 것일까요? 세 가지 이유가 있다고 생각합니다.",
        },
        {
            english:
                "One is that a lot of startup founders are trained as engineers, and customer service is not part of the training of engineers. You're supposed to build things that are robust and elegant, not be slavishly attentive to individual users like some kind of salesperson. Ironically, part of the reason engineering is traditionally averse to handholding is that its traditions date from a time when engineers were less powerful — when they were only in charge of their narrow domain of building things, rather than running the whole show. You can be ornery when you're Scotty, but not when you're Kirk.",
            korean: "하나는 많은 스타트업 창업자들이 엔지니어로 훈련받았고, 고객 서비스는 엔지니어 훈련의 일부가 아니라는 것입니다. 당신은 튼튼하고 우아한 것을 만들어야지, 마치 영업사원처럼 개별 사용자에게 노예처럼 주의를 기울여서는 안 됩니다. 아이러니하게도, 엔지니어링이 전통적으로 직접적인 지원을 꺼리는 이유 중 하나는 그 전통이 엔지니어의 힘이 약했을 때, 즉 그들이 전체 쇼를 운영하는 대신 물건을 만드는 좁은 영역만 담당했을 때로 거슬러 올라가기 때문입니다. 스카티(드라마 스타트렉의 기관장)일 때는 고집을 부릴 수 있지만, 커크(함장)일 때는 그럴 수 없습니다.",
        },
        {
            english:
                "Another reason founders don't focus enough on individual customers is that they worry it won't scale. But when founders of larval startups worry about this, I point out that in their current state they have nothing to lose. Maybe if they go out of their way to make existing users super happy, they'll one day have too many to do so much for. That would be a great problem to have. See if you can make it happen. And incidentally, when it does, you'll find that delighting customers scales better than you expected. Partly because you can usually find ways to make anything scale more than you would have predicted, and partly because delighting customers will by then have permeated your culture.",
            korean: "창업자들이 개별 고객에게 충분히 집중하지 않는 또 다른 이유는 그것이 확장되지 않을까 봐 걱정하기 때문입니다. 하지만 초기 단계 스타트업의 창업자들이 이것에 대해 걱정할 때, 저는 현재 상태에서는 잃을 것이 없다고 지적합니다. 어쩌면 기존 사용자를 매우 행복하게 만들기 위해 노력하다 보면 언젠가는 너무 많은 사용자를 갖게 되어 그렇게 많이 해줄 수 없게 될 수도 있습니다. 그것은 정말 좋은 문제일 것입니다. 그런 일이 일어나도록 노력해보세요. 그리고 덧붙이자면, 그런 일이 실제로 일어났을 때, 고객을 기쁘게 하는 것이 예상보다 잘 확장된다는 것을 알게 될 것입니다. 부분적으로는 예상보다 더 많이 확장할 수 있는 방법을 보통 찾을 수 있기 때문이고, 부분적으로는 그때쯤이면 고객을 기쁘게 하는 것이 당신의 문화에 스며들었기 때문입니다.",
        },
        {
            english:
                "I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.",
            korean: "초기 사용자를 행복하게 만들기 위해 너무 열심히 노력하다가 막다른 골목으로 빠진 스타트업을 단 한 번도 본 적이 없습니다.",
        },
        {
            english:
                "But perhaps the biggest thing preventing founders from realizing how attentive they could be to their users is that they've never experienced such attention themselves. Their standards for customer service have been set by the companies they've been customers of, which are mostly big ones. Tim Cook doesn't send you a hand-written note after you buy a laptop. He can't. But you can. That's one advantage of being small: you can provide a level of service no big company can. [6]",
            korean: '하지만 아마도 창업자들이 사용자에게 얼마나 세심하게 주의를 기울일 수 있는지 깨닫지 못하게 하는 가장 큰 이유는 그들 자신이 그런 관심을 경험해본 적이 없기 때문일 것입니다. 그들의 고객 서비스 기준은 그들이 고객이었던 회사들에 의해 설정되었는데, 대부분 대기업입니다. 팀 쿡은 당신이 노트북을 산 후에 손으로 쓴 편지를 보내지 않습니다. 그는 그럴 수 없습니다. 하지만 당신은 할 수 있습니다. 그것이 작다는 것의 한 가지 장점입니다: 어떤 대기업도 제공할 수 없는 수준의 서비스를 제공할 수 있습니다. [6](개리 탄은 창업자들이 초기에 빠지는 흥미로운 함정을 지적했습니다. 그들은 너무나도 커 보이고 싶어서 개별 사용자에 대한 무관심과 같은 대기업의 결점까지 모방합니다. 이것이 그들에게는 더 "전문적"으로 보입니다. 사실은 당신이 작다는 사실을 받아들이고 그것이 가져다주는 모든 이점을 활용하는 것이 더 낫습니다.)',
        },
        {
            english:
                "Once you realize that existing conventions are not the upper bound on user experience, it's interesting in a very pleasant way to think about how far you could go to delight your users.",
            korean: "기존의 관행이 사용자 경험의 상한선이 아니라는 것을 깨닫고 나면, 사용자를 기쁘게 하기 위해 얼마나 멀리 갈 수 있는지 생각하는 것은 매우 즐거운 방식으로 흥미롭습니다.",
        },
        {
            english:
                'Experience\n\nI was trying to think of a phrase to convey how extreme your attention to users should be, and I realized Steve Jobs had already done it: insanely great. Steve wasn\'t just using "insanely" as a synonym for "very." He meant it more literally — that one should focus on quality of execution to a degree that in everyday life would be considered pathological.',
            korean: '경험\n\n사용자에 대한 당신의 관심이 얼마나 극단적이어야 하는지를 전달할 문구를 생각하려고 노력하다가, 스티브 잡스가 이미 해냈다는 것을 깨달았습니다: 미치도록 훌륭한(insanely great). 스티브는 단지 "insanely"를 "매우(very)"의 동의어로 사용한 것이 아니었습니다. 그는 그것을 더 문자 그대로 의미했습니다 — 일상생활에서는 병적이라고 여겨질 정도로 실행의 품질에 집중해야 한다는 것입니다.',
        },
        {
            english:
                "All the most successful startups we've funded have, and that probably doesn't surprise would-be founders. What novice founders don't get is what insanely great translates to in a larval startup. When Steve Jobs started using that phrase, Apple was already an established company. He meant the Mac (and its documentation and even packaging — such is the nature of obsession) should be insanely well designed and manufactured. That's not hard for engineers to grasp. It's just a more extreme version of designing a robust and elegant product.",
            korean: "우리가 투자한 가장 성공적인 스타트업들은 모두 그랬고, 그것은 아마도 예비 창업자들을 놀라게 하지 않을 것입니다. 초보 창업자들이 이해하지 못하는 것은 초기 스타트업에서 미치도록 훌륭하다는 것이 무엇으로 번역되는지입니다. 스티브 잡스가 그 문구를 사용하기 시작했을 때, 애플은 이미 확고한 회사였습니다. 그는 맥(그리고 그 문서와 포장까지도 — 그것이 집착의 본질입니다)이 미치도록 잘 설계되고 제조되어야 한다고 의미했습니다. 그것은 엔지니어들이 이해하기 어렵지 않습니다. 그것은 단지 튼튼하고 우아한 제품을 설계하는 것의 더 극단적인 버전일 뿐입니다.",
        },
        {
            english:
                "What founders have a hard time grasping (and Steve himself might have had a hard time grasping) is what insanely great morphs into as you roll the time slider back to the first couple months of a startup's life. It's not the product that should be insanely great, but the experience of being your user. The product is just one component of that. For a big company it's necessarily the dominant one. But you can and should give users an insanely great experience with an early, incomplete, buggy product, if you make up the difference with attentiveness.",
            korean: "창업자들이 파악하기 어려워하는 것(그리고 스티브 자신도 파악하기 어려웠을 수도 있는 것)은 시간 슬라이더를 스타트업의 첫 몇 달로 되돌렸을 때 미치도록 훌륭하다는 것이 무엇으로 변하는가 하는 점입니다. 미치도록 훌륭해야 하는 것은 제품이 아니라, 당신의 사용자가 되는 경험입니다. 제품은 그것의 한 구성 요소일 뿐입니다. 대기업의 경우 필연적으로 지배적인 요소입니다. 하지만 당신은 초기 단계의 불완전하고 버그가 많은 제품으로도 사용자에게 미치도록 훌륭한 경험을 제공할 수 있고, 또 그래야 합니다. 만약 세심한 주의로 그 차이를 메운다면 말이죠.",
        },
        {
            english:
                "Can, perhaps, but should? Yes. Over-engaging with early users is not just a permissible technique for getting growth rolling. For most successful startups it's a necessary part of the feedback loop that makes the product good. Making a better mousetrap is not an atomic operation. Even if you start the way most successful startups have, by building something you yourself need, the first thing you build is never quite right. And except in domains with big penalties for making mistakes, it's often better not to aim for perfection initially. In software, especially, it usually works best to get something in front of users as soon as it has a quantum of utility, and then see what they do with it. Perfectionism is often an excuse for procrastination, and in any case your initial model of users is always inaccurate, even if you're one of them. [7]",
            korean: "아마도 그럴 수 있지만, 그래야 할까요? 예. 초기 사용자와 지나치게 관여하는 것은 성장을 시작하기 위한 허용 가능한 기술일 뿐만 아니라, 대부분의 성공적인 스타트업에게는 제품을 좋게 만드는 피드백 루프의 필수적인 부분입니다. 더 나은 쥐덫을 만드는 것은 단일 작업이 아닙니다. 대부분의 성공적인 스타트업처럼 당신 자신이 필요한 것을 만드는 것으로 시작하더라도, 처음 만드는 것은 결코 완벽하지 않습니다. 그리고 실수를 저지르는 것에 대한 큰 불이익이 없는 분야를 제외하고는, 처음부터 완벽을 목표로 하지 않는 것이 종종 더 낫습니다. 특히 소프트웨어에서는, 약간의 유용성이라도 갖게 되면 가능한 한 빨리 사용자 앞에 내놓고 그들이 그것으로 무엇을 하는지 보는 것이 보통 가장 효과적입니다. 완벽주의는 종종 꾸물거림의 변명이며, 어쨌든 당신의 초기 사용자 모델은 항상 부정확합니다. 당신이 그들 중 하나일지라도 말입니다. [7](사용자 모델이 완벽하게 정확할 수는 거의 없습니다. 왜냐하면 사용자의 요구는 종종 당신이 그들을 위해 만드는 것에 반응하여 변하기 때문입니다. 그들에게 마이크로컴퓨터를 만들어주면, 갑자기 그들은 그것으로 스프레드시트를 실행해야 합니다. 왜냐하면 당신의 새로운 마이크로컴퓨터의 등장이 누군가로 하여금 스프레드시트를 발명하게 만들기 때문입니다.)",
        },
        {
            english:
                "The feedback you get from engaging directly with your earliest users will be the best you ever get. When you're so big you have to resort to focus groups, you'll wish you could go over to your users' homes and offices and watch them use your stuff like you did when there were only a handful of them.",
            korean: "가장 초기의 사용자들과 직접 소통하면서 얻는 피드백은 당신이 얻을 수 있는 최고의 피드백일 것입니다. 당신이 너무 커져서 포커스 그룹에 의존해야 할 때, 당신은 사용자가 몇 명밖에 없었을 때처럼 그들의 집과 사무실에 가서 그들이 당신의 제품을 사용하는 것을 지켜볼 수 있기를 바랄 것입니다.",
        },
        {
            english:
                "Fire\n\nSometimes the right unscalable trick is to focus on a deliberately narrow market. It's like keeping a fire contained at first to get it really hot before adding more logs.",
            korean: "불씨\n\n때로는 올바른 확장 불가능한 전략은 의도적으로 좁은 시장에 집중하는 것입니다. 마치 불을 더 잘 타오르게 하기 위해 처음에 불을 가두어 뜨겁게 달군 후 장작을 더 넣는 것과 같습니다.",
        },
        {
            english:
                "That's what Facebook did. At first it was just for Harvard students. In that form it only had a potential market of a few thousand people, but because they felt it was really for them, a critical mass of them signed up. After Facebook stopped being for Harvard students, it remained for students at specific colleges for quite a while. When I interviewed Mark Zuckerberg at Startup School, he said that while it was a lot of work creating course lists for each school, doing that made students feel the site was their natural home.",
            korean: "그것이 페이스북이 한 일입니다. 처음에는 하버드 학생들만을 위한 것이었습니다. 그 형태로서는 잠재 시장이 수천 명에 불과했지만, 그들이 그것이 정말로 자신들을 위한 것이라고 느꼈기 때문에 결정적인 다수가 가입했습니다. 페이스북이 하버드 학생들을 위한 것이 아니게 된 후에도 한동안 특정 대학의 학생들을 위한 것으로 남아 있었습니다. 스타트업 스쿨에서 마크 저커버그를 인터뷰했을 때, 그는 각 학교의 강의 목록을 만드는 것이 많은 작업이었지만, 그렇게 함으로써 학생들이 그 사이트를 자신들의 당연한 공간으로 느끼게 만들었다고 말했습니다.",
        },
        {
            english:
                "Any startup that could be described as a marketplace usually has to start in a subset of the market, but this can work for other startups as well. It's always worth asking if there's a subset of the market in which you can get a critical mass of users quickly. [8]",
            korean: "마켓플레이스로 설명될 수 있는 모든 스타트업은 보통 시장의 하위 집합에서 시작해야 하지만, 이것은 다른 스타트업에도 효과가 있을 수 있습니다. 신속하게 결정적인 사용자 수를 확보할 수 있는 시장의 하위 집합이 있는지 항상 물어볼 가치가 있습니다. [8](가장 빨리 가입할 하위 집합과 가장 많이 지불할 하위 집합 중에서 선택해야 한다면, 일반적으로 전자를 선택하는 것이 가장 좋습니다. 왜냐하면 그들이 아마도 얼리 어답터이기 때문입니다. 그들은 당신의 제품에 더 나은 영향을 미칠 것이고, 영업에 많은 노력을 기울이게 만들지 않을 것입니다. 그리고 그들이 돈이 적더라도, 초기에 목표 성장률을 유지하는 데 그렇게 많은 돈이 필요하지는 않습니다.)",
        },
        {
            english:
                "Most startups that use the contained fire strategy do it unconsciously. They build something for themselves and their friends, who happen to be the early adopters, and only realize later that they could offer it to a broader market. The strategy works just as well if you do it unconsciously. The biggest danger of not being consciously aware of this pattern is for those who naively discard part of it. E.g. if you don't build something for yourself and your friends, or even if you do, but you come from the corporate world and your friends are not early adopters, you'll no longer have a perfect initial market handed to you on a platter.",
            korean: "억제된 불 전략을 사용하는 대부분의 스타트업은 무의식적으로 그렇게 합니다. 그들은 자신들과 친구들을 위해 무언가를 만들고, 그 친구들이 우연히 얼리 어답터가 되며, 나중에야 더 넓은 시장에 제공할 수 있다는 것을 깨닫습니다. 이 전략은 무의식적으로 수행해도 마찬가지로 효과가 있습니다. 이 패턴을 의식적으로 인지하지 못하는 가장 큰 위험은 순진하게 그 일부를 버리는 사람들에게 있습니다. 예를 들어, 자신과 친구들을 위해 무언가를 만들지 않거나, 만들더라도 기업 세계에서 왔고 친구들이 얼리 어답터가 아니라면, 더 이상 완벽한 초기 시장이 당신에게 그냥 주어지지 않을 것입니다.",
        },
        {
            english:
                "Among companies, the best early adopters are usually other startups. They're more open to new things both by nature and because, having just been started, they haven't made all their choices yet. Plus when they succeed they grow fast, and you with them. It was one of many unforeseen advantages of the YC model (and specifically of making YC big) that B2B startups now have an instant market of hundreds of other startups ready at hand.",
            korean: "기업들 중에서 최고의 얼리 어답터는 보통 다른 스타트업입니다. 그들은 본질적으로 새로운 것에 더 개방적이며, 또한 막 시작했기 때문에 아직 모든 선택을 하지 않았습니다. 게다가 그들이 성공하면 빠르게 성장하고, 당신도 그들과 함께 성장합니다. YC 모델의 많은 예상치 못한 장점 중 하나(특히 YC를 크게 만든 것)는 B2B 스타트업이 이제 수백 개의 다른 스타트업으로 구성된 즉각적인 시장을 바로 손에 쥘 수 있다는 것입니다.",
        },
        {
            english:
                "Meraki\n\nFor hardware startups there's a variant of doing things that don't scale that we call \"pulling a Meraki.\" Although we didn't fund Meraki, the founders were Robert Morris's grad students, so we know their history. They got started by doing something that really doesn't scale: assembling their routers themselves.",
            korean: '메라키 방식\n\n하드웨어 스타트업의 경우, 확장되지 않는 일을 하는 것의 변형으로 우리가 "메라키 방식(pulling a Meraki)"이라고 부르는 것이 있습니다. 우리가 메라키(Meraki)에 투자하지는 않았지만, 창업자들은 로버트 모리스의 대학원생들이었기 때문에 그들의 역사를 알고 있습니다. 그들은 정말로 확장되지 않는 일, 즉 라우터를 직접 조립하는 것으로 시작했습니다.',
        },
        {
            english:
                "Hardware startups face an obstacle that software startups don't. The minimum order for a factory production run is usually several hundred thousand dollars. Which can put you in a catch-22: without a product you can't generate the growth you need to raise the money to manufacture your product. Back when hardware startups had to rely on investors for money, you had to be pretty convincing to overcome this. The arrival of crowdfunding (or more precisely, preorders) has helped a lot. But even so I'd advise startups to pull a Meraki initially if they can. That's what Pebble did. The Pebbles assembled the first several hundred watches themselves. If they hadn't gone through that phase, they probably wouldn't have sold $10 million worth of watches when they did go on Kickstarter.",
            korean: "하드웨어 스타트업은 소프트웨어 스타트업이 겪지 않는 장애물에 직면합니다. 공장 생산 라인의 최소 주문량은 보통 수십만 달러입니다. 이는 당신을 이러지도 저러지도 못하는 상황(catch-22)에 빠뜨릴 수 있습니다: 제품 없이는 제품을 제조하기 위한 자금을 조달하는 데 필요한 성장을 창출할 수 없습니다. 하드웨어 스타트업이 자금을 투자자에게 의존해야 했던 시절에는 이를 극복하기 위해 상당히 설득력이 있어야 했습니다. 크라우드펀딩(더 정확하게는 선주문)의 등장은 많은 도움이 되었습니다. 하지만 그럼에도 불구하고 저는 스타트업들이 가능하다면 초기에 메라키 방식을 따르라고 조언합니다. 페블(Pebble)이 그렇게 했습니다. 페블 팀은 처음 수백 개의 시계를 직접 조립했습니다. 만약 그들이 그 단계를 거치지 않았다면, 킥스타터(Kickstarter)에 제품을 내놓았을 때 천만 달러어치의 시계를 팔지 못했을 것입니다.",
        },
        {
            english:
                "Like paying excessive attention to early customers, fabricating things yourself turns out to be valuable for hardware startups. You can tweak the design faster when you're the factory, and you learn things you'd never have known otherwise. Eric Migicovsky of Pebble said one of the things he learned was \"how valuable it was to source good screws.\" Who knew?",
            korean: '초기 고객에게 과도한 주의를 기울이는 것처럼, 직접 물건을 제작하는 것은 하드웨어 스타트업에게 가치 있는 것으로 드러납니다. 당신이 공장일 때 디자인을 더 빨리 수정할 수 있고, 그렇지 않으면 결코 알 수 없었을 것들을 배우게 됩니다. 페블의 에릭 미지콥스키는 그가 배운 것 중 하나가 "좋은 나사를 구하는 것이 얼마나 중요한지"였다고 말했습니다. 누가 알았겠습니까?',
        },
        {
            english:
                "Consult\n\nSometimes we advise founders of B2B startups to take over-engagement to an extreme, and to pick a single user and act as if they were consultants building something just for that one user. The initial user serves as the form for your mold; keep tweaking till you fit their needs perfectly, and you'll usually find you've made something other users want too. Even if there aren't many of them, there are probably adjacent territories that have more. As long as you can find just one user who really needs something and can act on that need, you've got a toehold in making something people want, and that's as much as any startup needs initially. [9]",
            korean: "컨설팅\n\n때때로 우리는 B2B 스타트업 창업자들에게 과도한 참여를 극단적으로 하고, 단일 사용자를 선택하여 마치 그 한 명의 사용자를 위해 무언가를 만드는 컨설턴트처럼 행동하라고 조언합니다. 초기 사용자는 당신의 틀을 위한 형태로 작용합니다. 그들의 요구에 완벽하게 맞을 때까지 계속 수정하면, 보통 다른 사용자들도 원하는 무언가를 만들었다는 것을 알게 될 것입니다. 그들이 많지 않더라도, 더 많은 사용자가 있는 인접 영역이 있을 것입니다. 무언가를 정말로 필요로 하고 그 필요에 따라 행동할 수 있는 단 한 명의 사용자만 찾을 수 있다면, 사람들이 원하는 것을 만드는 데 발판을 마련한 것이고, 그것이 초기에 어떤 스타트업에게든 필요한 전부입니다. [9](예, 한 명의 사용자에게만 정말로 유용한 것을 만들게 되는 경우를 상상할 수 있습니다. 하지만 그런 경우는 보통 경험이 없는 창업자에게도 명백합니다. 따라서 한 명의 시장을 위해 무언가를 만들고 있다는 것이 명백하지 않다면, 그 위험에 대해 걱정하지 마십시오.)",
        },
        {
            english:
                "Consulting is the canonical example of work that doesn't scale. But (like other ways of bestowing one's favors liberally) it's safe to do it so long as you're not being paid to. That's where companies cross the line. So long as you're a product company that's merely being extra attentive to a customer, they're very grateful even if you don't solve all their problems. But when they start paying you specifically for that attentiveness — when they start paying you by the hour — they expect you to do everything.",
            korean: "컨설팅은 확장되지 않는 작업의 전형적인 예입니다. 하지만 (다른 관대하게 호의를 베푸는 방법들과 마찬가지로) 대가를 받지 않는 한 안전하게 할 수 있습니다. 그 지점에서 회사들은 선을 넘습니다. 당신이 단지 고객에게 특별히 세심한 주의를 기울이는 제품 회사인 한, 그들은 당신이 모든 문제를 해결해주지 않더라도 매우 감사해합니다. 하지만 그들이 그 세심함에 대해 구체적으로 비용을 지불하기 시작하면 — 시간당 비용을 지불하기 시작하면 — 그들은 당신이 모든 것을 해주기를 기대합니다.",
        },
        {
            english:
                "Another consulting-like technique for recruiting initially lukewarm users is to use your software yourselves on their behalf. We did that at Viaweb. When we approached merchants asking if they wanted to use our software to make online stores, some said no, but they'd let us make one for them. Since we would do anything to get users, we did. We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts. But in retrospect it was exactly the right thing to do, because it taught us how it would feel to merchants to use our software. Sometimes the feedback loop was near instantaneous: in the middle of building some merchant's site I'd find I needed a feature we didn't have, so I'd spend a couple hours implementing it and then resume building the site.",
            korean: "처음에는 미지근한 사용자를 모집하기 위한 또 다른 컨설팅과 유사한 기술은 그들을 대신하여 당신의 소프트웨어를 직접 사용하는 것입니다. 우리는 비아웹(Viaweb)에서 그렇게 했습니다. 우리가 상인들에게 접근하여 온라인 상점을 만들기 위해 우리 소프트웨어를 사용하고 싶은지 물었을 때, 일부는 거절했지만, 우리가 그들을 위해 만들어주는 것은 허락했습니다. 우리는 사용자를 얻기 위해 무엇이든 할 것이었기 때문에 그렇게 했습니다. 당시에는 우리가 꽤 한심하다고 느꼈습니다. 큰 전략적 전자상거래 파트너십을 조직하는 대신, 우리는 여행 가방, 펜, 남성 셔츠를 팔려고 노력하고 있었습니다. 하지만 돌이켜보면 그것은 정확히 옳은 일이었습니다. 왜냐하면 그것은 상인들이 우리 소프트웨어를 사용하는 것이 어떤 느낌일지 우리에게 가르쳐주었기 때문입니다. 때로는 피드백 루프가 거의 즉각적이었습니다: 어떤 상인의 사이트를 구축하는 도중에 우리에게 없는 기능이 필요하다는 것을 알게 되면, 몇 시간을 들여 그 기능을 구현한 다음 사이트 구축을 재개했습니다.",
        },
        {
            english:
                "Manual\n\nThere's a more extreme variant where you don't just use your software, but are your software. When you only have a small number of users, you can sometimes get away with doing by hand things that you plan to automate later. This lets you launch faster, and when you do finally automate yourself out of the loop, you'll know exactly what to build because you'll have muscle memory from doing it yourself.",
            korean: "수동 작업\n\n소프트웨어를 사용하는 것뿐만 아니라, 당신 자신이 소프트웨어가 되는 더 극단적인 변형이 있습니다. 사용자가 소수일 때는 나중에 자동화할 계획인 작업을 수동으로 처리해도 괜찮을 때가 있습니다. 이렇게 하면 더 빨리 출시할 수 있고, 마침내 자동화를 통해 자신을 루프에서 제외하게 되면, 직접 해봤기 때문에 무엇을 만들어야 할지 정확히 알게 될 것입니다. (근육 기억 덕분에)",
        },
        {
            english:
                'When manual components look to the user like software, this technique starts to have aspects of a practical joke. For example, the way Stripe delivered "instant" merchant accounts to its first users was that the founders manually signed them up for traditional merchant accounts behind the scenes.',
            korean: '수동 구성 요소가 사용자에게 소프트웨어처럼 보일 때, 이 기술은 장난의 측면을 갖기 시작합니다. 예를 들어, 스트라이프가 첫 사용자들에게 "즉시" 판매자 계정을 제공한 방식은 창업자들이 뒤에서 수동으로 전통적인 판매자 계정에 가입시킨 것이었습니다.',
        },
        {
            english:
                "Some startups could be entirely manual at first. If you can find someone with a problem that needs solving and you can solve it manually, go ahead and do that for as long as you can, and then gradually automate the bottlenecks. It would be a little frightening to be solving users' problems in a way that wasn't yet automatic, but less frightening than the far more common case of having something automatic that doesn't yet solve anyone's problems.",
            korean: "일부 스타트업은 처음에는 완전히 수동적일 수 있습니다. 해결해야 할 문제가 있는 사람을 찾을 수 있고 수동으로 해결할 수 있다면, 가능한 한 오랫동안 그렇게 하고 점차 병목 현상을 자동화하십시오. 아직 자동화되지 않은 방식으로 사용자의 문제를 해결하는 것은 약간 두려울 수 있지만, 아직 누구의 문제도 해결하지 못하는 자동화된 무언가를 가지고 있는 훨씬 더 흔한 경우보다 덜 두려울 것입니다.",
        },
        {
            english:
                "Big\n\nI should mention one sort of initial tactic that usually doesn't work: the Big Launch. I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity. They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.",
            korean: "거창한 시작\n\n일반적으로 효과가 없는 한 가지 초기 전략을 언급해야겠습니다: 거창한 시작(Big Launch). 저는 가끔 스타트업이 동력 항공기가 아니라 발사체라고 믿는 것처럼 보이는 창업자들을 만납니다. 그들은 충분한 초기 속도로 발사되어야만 성공할 것이라고 믿습니다. 그들은 8개의 다른 매체에 동시에, 엠바고를 걸고 출시하기를 원합니다. 그리고 물론 화요일에 말이죠. 어딘가에서 그것이 무언가를 출시하기에 최적의 날이라고 읽었기 때문입니다.",
        },
        {
            english:
                "It's easy to see how little launches matter. Think of some successful startups. How many of their launches do you remember? All you need from a launch is some initial core of users. How well you're doing a few months later will depend more on how happy you made those users than how many there were of them. [10]",
            korean: "출시가 얼마나 중요하지 않은지 쉽게 알 수 있습니다. 성공적인 스타트업 몇 군데를 생각해보십시오. 그들의 출시 중 얼마나 많은 것을 기억하십니까? 출시에서 필요한 것은 초기의 핵심 사용자 그룹뿐입니다. 몇 달 후에 얼마나 잘하고 있는지는 그 사용자가 몇 명이었는지보다 그들을 얼마나 행복하게 만들었는지에 더 많이 달려 있을 것입니다. [10](출시 규모와 성공 사이에는 심지어 반비례 관계가 있을 수도 있습니다. 제가 기억하는 유일한 출시는 세그웨이(Segway)나 구글 웨이브(Google Wave)와 같은 유명한 실패작들뿐입니다. 웨이브는 특히 놀라운 예입니다. 왜냐하면 저는 그것이 실제로 훌륭한 아이디어였지만, 과도한 출시 때문에 부분적으로 망했다고 생각하기 때문입니다.)",
        },
        {
            english:
                "So why do founders think launches matter? A combination of solipsism and laziness. They think what they're building is so great that everyone who hears about it will immediately sign up. Plus it would be so much less work if you could get users merely by broadcasting your existence, rather than recruiting them one at a time. But even if what you're building really is great, getting users will always be a gradual process — partly because great things are usually also novel, but mainly because users have other things to think about.",
            korean: "그렇다면 왜 창업자들은 출시가 중요하다고 생각할까요? 자기중심주의와 게으름의 조합입니다. 그들은 자신이 만들고 있는 것이 너무 훌륭해서 그것에 대해 듣는 모든 사람이 즉시 가입할 것이라고 생각합니다. 게다가 사용자를 한 명씩 모집하는 대신 자신의 존재를 알리는 것만으로 사용자를 얻을 수 있다면 훨씬 더 적은 노력이 들 것입니다. 하지만 당신이 만들고 있는 것이 정말 훌륭하더라도, 사용자를 얻는 것은 항상 점진적인 과정일 것입니다 — 부분적으로는 훌륭한 것이 보통 새롭기 때문이기도 하지만, 주로 사용자들이 생각해야 할 다른 것들이 있기 때문입니다.",
        },
        {
            english:
                "Partnerships too usually don't work. They don't work for startups in general, but they especially don't work as a way to get growth started. It's a common mistake among inexperienced founders to believe that a partnership with a big company will be their big break. Six months later they're all saying the same thing: that was way more work than we expected, and we ended up getting practically nothing out of it. [11]",
            korean: "파트너십도 보통 효과가 없습니다. 일반적으로 스타트업에게 효과가 없지만, 특히 성장을 시작하는 방법으로는 효과가 없습니다. 경험 없는 창업자들이 흔히 저지르는 실수는 대기업과의 파트너십이 그들의 큰 성공 기회가 될 것이라고 믿는 것입니다. 6개월 후, 그들은 모두 똑같은 말을 합니다: 예상보다 훨씬 많은 작업이었고, 결국에는 거의 아무것도 얻지 못했습니다. [11](구글은 야후의 등에 업혀 성장했지만, 그것은 파트너십이 아니었습니다. 야후는 그들의 고객이었습니다.)",
        },
        {
            english:
                "It's not enough just to do something extraordinary initially. You have to make an extraordinary effort initially. Any strategy that omits the effort — whether it's expecting a big launch to get you users, or a big partner — is ipso facto suspect.",
            korean: "처음에 특별한 일을 하는 것뿐만 아니라 초기에는 특별한 노력을 기울여야 합니다. 노력을 생략하는 모든 전략 — 거창한 출시가 사용자를 확보해 줄 것이라고 기대하든, 큰 파트너가 그렇게 해줄 것이라고 기대하든 — 은 그 자체로 의심스럽습니다.",
        },
        {
            english:
                "Vector\n\nThe need to do something unscalably laborious to get started is so nearly universal that it might be a good idea to stop thinking of startup ideas as scalars. Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.",
            korean: "벡터\n\n시작하기 위해 확장 불가능하고 힘든 일을 해야 한다는 필요성은 거의 보편적이어서 스타트업 아이디어를 스칼라 값으로 생각하는 것을 멈추는 것이 좋을 수도 있습니다. 대신, 우리가 만들고자 하는 것과 회사를 시작하기 위해 초기에 할 확장 불가능한 일(들)의 쌍으로 생각해야 합니다.",
        },
        {
            english:
                "It could be interesting to start viewing startup ideas this way, because now that there are two components you can try to be imaginative about the second as well as the first. But in most cases the second component will be what it usually is — recruit users manually and give them an overwhelmingly good experience — and the main benefit of treating startups as vectors will be to remind founders they need to work hard in two dimensions. [12]",
            korean: "스타트업 아이디어를 이런 식으로 보는 것은 흥미로울 수 있습니다. 왜냐하면 이제 두 가지 구성 요소가 있으므로 첫 번째뿐만 아니라 두 번째에 대해서도 창의적으로 생각하려고 노력할 수 있기 때문입니다. 하지만 대부분의 경우 두 번째 구성 요소는 평소와 같을 것입니다 — 수동으로 사용자를 모집하고 압도적으로 좋은 경험을 제공하는 것 — 그리고 스타트업을 벡터로 취급하는 주된 이점은 창업자들에게 두 가지 차원에서 열심히 일해야 한다는 것을 상기시켜주는 것입니다. [12](또한 창업자들에게 두 번째 구성 요소가 비어 있는 아이디어 — 예를 들어 수동으로 모집할 사용자를 찾을 방법이 없어서 시작하기 위해 할 수 있는 일이 없는 아이디어 — 는 적어도 그 창업자들에게는 아마도 나쁜 아이디어라는 것을 상기시켜 줄 것입니다.)",
        },
        {
            english:
                "Thanks to Sam Altman, Paul Buchheit, Patrick Collison, Kevin Hale, Steven Levy, Jessica Livingston, Geoff Ralston, and Garry Tan for reading drafts of this.",
            korean: "이 초안을 읽어준 샘 알트만, 폴 부크하이트, 패트릭 콜리슨, 케빈 헤일, 스티븐 레비, 제시카 리빙스턴, 제프 랄스턴, 개리 탄에게 감사합니다.",
        },
    ],
};
