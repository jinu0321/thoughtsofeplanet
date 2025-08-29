import { TranslatedEssay } from "@/lib/types";

export const beforeTheStartup: TranslatedEssay = {
    type: "translated",
    slug: "before-the-startup",
    title: "Before the Startup",
    koreanTitle: "스타트업을 시작하기 전에",
    date: "October 2014",
    author: "Paul Graham",
    paragraphs: [
        {
            english:
                "(This essay is derived from a guest lecture in Sam Altman's startup class at Stanford. It's intended for college students, but much of it is applicable to potential founders at other ages.)",
            korean: "(이 에세이는 스탠포드 대학에서 열린 샘 알트먼의 스타트업 강의에 초청 강연으로 참여했을 때의 내용을 바탕으로 작성되었습니다. 주로 대학생을 대상으로 하지만, 다른 연령대의 잠재적 창업가들에게도 많은 부분이 적용될 수 있습니다.)",
        },
        {
            english:
                "One of the advantages of having kids is that when you have to give advice, you can ask yourself \"what would I tell my own kids?\" My kids are little, but I can imagine what I'd tell them about startups if they were in college, and that's what I'm going to tell you.",
            korean: '아이를 키우는 것의 장점 중 하나는 조언을 해야 할 때 "내 아이들에게라면 뭐라고 말해줄까?"라고 자문할 수 있다는 것입니다. 제 아이들은 아직 어리지만, 만약 그 아이들이 대학생이 되어 스타트업에 대해 묻는다면 뭐라고 말해줄지 상상할 수 있고, 바로 그 이야기를 여러분께 해드리려고 합니다.',
        },
        {
            english:
                "Startups are very counterintuitive. I'm not sure why. Maybe it's just because knowledge about them hasn't permeated our culture yet. But whatever the reason, starting a startup is a task where you can't always trust your instincts.",
            korean: "스타트업은 매우 직관에 반하는 경우가 많습니다. 왜 그런지는 잘 모르겠습니다. 어쩌면 스타트업에 대한 지식이 아직 우리 문화에 충분히 스며들지 않았기 때문일 수도 있습니다. 하지만 이유가 무엇이든, 스타트업을 시작하는 것은 항상 본능을 믿을 수만은 없는 일입니다.",
        },
        {
            english:
                "It's like skiing in that way. When you first try skiing and you want to slow down, your instinct is to lean back. But if you lean back on skis you fly down the hill out of control. So part of learning to ski is learning to suppress that impulse. Eventually you get new habits, but at first it takes a conscious effort. At first there's a list of things you're trying to remember as you start down the hill.",
            korean: "그런 면에서 스키와 비슷합니다. 처음 스키를 탈 때 속도를 줄이고 싶으면 본능적으로 몸을 뒤로 젖히게 됩니다. 하지만 스키를 탄 채로 몸을 뒤로 젖히면 통제 불능 상태로 언덕을 질주하게 됩니다. 그래서 스키를 배우는 과정의 일부는 그런 충동을 억제하는 법을 배우는 것입니다. 결국에는 새로운 습관이 생기지만, 처음에는 의식적인 노력이 필요합니다. 처음 언덕을 내려가기 시작할 때는 기억해야 할 것들의 목록이 있습니다.",
        },
        {
            english:
                "Startups are as unnatural as skiing, so there's a similar list for startups. Here I'm going to give you the first part of it — the things to remember if you want to prepare yourself to start a startup.",
            korean: "스타트업도 스키만큼이나 부자연스러운 일이라, 스타트업에도 비슷한 목록이 있습니다. 여기서는 그 첫 번째 부분, 즉 스타트업을 시작하기 위해 스스로를 준비하고 싶다면 기억해야 할 것들을 알려드리겠습니다.",
        },
        {
            english:
                "Counterintuitive\n\nThe first item on it is the fact I already mentioned: that startups are so weird that if you trust your instincts, you'll make a lot of mistakes. If you know nothing more than this, you may at least pause before making them.",
            korean: "직관에 반하는 것들\n\n첫 번째 항목은 이미 언급했던 사실입니다. 스타트업은 너무나 기이해서 본능을 믿으면 많은 실수를 저지르게 된다는 것입니다. 이 사실만 알고 있어도, 적어도 실수를 저지르기 전에 잠시 멈칫할 수 있을 것입니다.",
        },
        {
            english:
                "When I was running Y Combinator I used to joke that our function was to tell founders things they would ignore. It's really true. Batch after batch, the YC partners warn founders about mistakes they're about to make, and the founders ignore them, and then come back a year later and say \"I wish we'd listened.\"",
            korean: '제가 Y Combinator를 운영할 때, 우리의 역할은 창업자들이 무시할 만한 것들을 말해주는 것이라고 농담하곤 했습니다. 정말입니다. 매 기수마다 YC 파트너들은 창업자들이 곧 저지를 실수에 대해 경고하지만, 창업자들은 이를 무시하고 1년 뒤에 돌아와 "그때 들을 걸 그랬어요."라고 말합니다.',
        },
        {
            english:
                "Why do the founders ignore the partners' advice? Well, that's the thing about counterintuitive ideas: they contradict your intuitions. They seem wrong. So of course your first impulse is to disregard them. And in fact my joking description is not merely the curse of Y Combinator but part of its raison d'etre. If founders' instincts already gave them the right answers, they wouldn't need us. You only need other people to give you advice that surprises you. That's why there are a lot of ski instructors and not many running instructors. [1]",
            korean: "왜 창업자들은 파트너들의 조언을 무시할까요? 글쎄요, 그게 바로 직관에 반하는 아이디어들의 특징입니다. 직관과 모순되기 때문이죠. 틀린 것처럼 보입니다. 그러니 당연히 첫 번째 충동은 그것들을 무시하는 것입니다. 사실 제 농담 섞인 묘사는 단순히 Y Combinator의 저주가 아니라 존재 이유의 일부이기도 합니다. 만약 창업자들의 본능이 이미 정답을 알려준다면, 그들은 우리가 필요 없을 것입니다. 당신을 놀라게 하는 조언을 해줄 다른 사람들이 필요한 법입니다. 그래서 스키 강사는 많지만 달리기 강사는 많지 않은 것입니다. [1]",
        },
        {
            english:
                'You can, however, trust your instincts about people. And in fact one of the most common mistakes young founders make is not to do that enough. They get involved with people who seem impressive, but about whom they feel some misgivings personally. Later when things blow up they say "I knew there was something off about him, but I ignored it because he seemed so impressive."',
            korean: '하지만 사람에 대한 본능은 믿어도 됩니다. 그리고 사실 젊은 창업자들이 저지르는 가장 흔한 실수 중 하나는 그것을 충분히 하지 않는다는 것입니다. 그들은 인상적으로 보이는 사람들과 엮이지만, 개인적으로는 어떤 불안감을 느낍니다. 나중에 일이 터지고 나면 "그 사람에게 뭔가 이상한 점이 있다는 걸 알았지만, 너무 인상적이어서 무시했어요."라고 말합니다.',
        },
        {
            english:
                "If you're thinking about getting involved with someone — as a cofounder, an employee, an investor, or an acquirer — and you have misgivings about them, trust your gut. If someone seems slippery, or bogus, or a jerk, don't ignore it.",
            korean: "만약 누군가와 공동 창업자, 직원, 투자자, 또는 인수자로서 관계를 맺을 생각을 하고 있는데 그들에 대해 불안감을 느낀다면, 당신의 직감을 믿으세요. 누군가가 교활해 보이거나, 가짜 같거나, 혹은 재수 없는 사람처럼 보인다면, 그것을 무시하지 마세요.",
        },
        {
            english:
                "This is one case where it pays to be self-indulgent. Work with people you genuinely like, and you've known long enough to be sure.",
            korean: "이것은 자기 마음대로 해도 괜찮은 경우 중 하나입니다. 진심으로 좋아하는 사람들과 일하고, 확신할 수 있을 만큼 오랫동안 알아온 사람들과 일하세요.",
        },
        {
            english:
                "Expertise\n\nThe second counterintuitive point is that it's not that important to know a lot about startups. The way to succeed in a startup is not to be an expert on startups, but to be an expert on your users and the problem you're solving for them. Mark Zuckerberg didn't succeed because he was an expert on startups. He succeeded despite being a complete noob at startups, because he understood his users really well.",
            korean: "전문성\n\n두 번째 직관에 반하는 점은 스타트업에 대해 많이 아는 것이 그다지 중요하지 않다는 것입니다. 스타트업에서 성공하는 방법은 스타트업 전문가가 되는 것이 아니라, 사용자와 그들을 위해 해결하려는 문제에 대한 전문가가 되는 것입니다. 마크 저커버그는 스타트업 전문가였기 때문에 성공한 것이 아닙니다. 그는 스타트업에 대해서는 완전 초보였음에도 불구하고 사용자를 매우 잘 이해했기 때문에 성공했습니다.",
        },
        {
            english:
                "If you don't know anything about, say, how to raise an angel round, don't feel bad on that account. That sort of thing you can learn when you need to, and forget after you've done it.",
            korean: "예를 들어 엔젤 투자를 유치하는 방법에 대해 아무것도 모른다고 해서 기분 나빠할 필요 없습니다. 그런 종류의 것은 필요할 때 배우고, 다 하고 나면 잊어버려도 됩니다.",
        },
        {
            english:
                "In fact, I worry it's not merely unnecessary to learn in great detail about the mechanics of startups, but possibly somewhat dangerous. If I met an undergrad who knew all about convertible notes and employee agreements and (God forbid) class FF stock, I wouldn't think \"here is someone who is way ahead of their peers.\" It would set off alarms. Because another of the characteristic mistakes of young founders is to go through the motions of starting a startup. They make up some plausible-sounding idea, raise money at a good valuation, rent a cool office, hire a bunch of people. From the outside that seems like what startups do. But the next step after rent a cool office and hire a bunch of people is: gradually realize how completely fucked they are, because while imitating all the outward forms of a startup they have neglected the one thing that's actually essential: making something people want.",
            korean: "사실, 스타트업의 작동 방식에 대해 자세히 배우는 것이 불필요할 뿐만 아니라 다소 위험할 수도 있다고 걱정합니다. 만약 제가 전환 사채, 직원 계약, 그리고 (맙소사) 클래스 FF 주식에 대해 모든 것을 알고 있는 학부생을 만난다면, \"여기 동료들보다 훨씬 앞서 있는 사람이 있군.\"이라고 생각하지 않을 것입니다. 오히려 경고등이 켜질 것입니다. 왜냐하면 젊은 창업자들이 저지르는 또 다른 특징적인 실수는 스타트업을 시작하는 '시늉'만 한다는 것입니다. 그들은 그럴듯하게 들리는 아이디어를 만들어내고, 좋은 가치로 자금을 조달하고, 멋진 사무실을 빌리고, 많은 사람들을 고용합니다. 밖에서 보면 그것이 스타트업이 하는 일처럼 보입니다. 하지만 멋진 사무실을 빌리고 많은 사람들을 고용한 다음 단계는 점차 자신들이 얼마나 완전히 망했는지 깨닫는 것입니다. 스타트업의 모든 외형적인 형태를 모방하는 동안 정작 본질적인 한 가지, 즉 사람들이 원하는 것을 만드는 것을 소홀히 했기 때문입니다.",
        },
        {
            english:
                "Game\n\nWe saw this happen so often that we made up a name for it: playing house. Eventually I realized why it was happening. The reason young founders go through the motions of starting a startup is because that's what they've been trained to do for their whole lives up to that point. Think about what you have to do to get into college, for example. Extracurricular activities, check. Even in college classes most of the work is as artificial as running laps.",
            korean: "게임\n\n우리는 이런 일이 너무 자주 일어나는 것을 보고 '집짓기 놀이(playing house)'라는 이름을 붙였습니다. 결국 저는 왜 이런 일이 일어나는지 깨달았습니다. 젊은 창업자들이 스타트업을 시작하는 시늉을 하는 이유는 그것이 그때까지 평생 동안 하도록 훈련받아온 것이기 때문입니다. 예를 들어 대학에 가기 위해 무엇을 해야 하는지 생각해보세요. 과외 활동, 체크. 심지어 대학 수업에서도 대부분의 과제는 운동장을 도는 것만큼이나 인위적입니다.",
        },
        {
            english:
                "I'm not attacking the educational system for being this way. There will always be a certain amount of fakeness in the work you do when you're being taught something, and if you measure their performance it's inevitable that people will exploit the difference to the point where much of what you're measuring is artifacts of the fakeness.",
            korean: "교육 시스템이 이렇다고 해서 비난하는 것은 아닙니다. 무언가를 배울 때 하는 일에는 항상 어느 정도의 가짜(fakeness)가 있기 마련이고, 그들의 성과를 측정한다면 사람들이 그 차이를 이용하여 측정하는 것의 상당 부분이 그 가짜의 산물이 되는 지경에 이르는 것은 불가피합니다.",
        },
        {
            english:
                "I confess I did it myself in college. I found that in a lot of classes there might only be 20 or 30 ideas that were the right shape to make good exam questions. The way I studied for exams in these classes was not (except incidentally) to master the material taught in the class, but to make a list of potential exam questions and work out the answers in advance. When I walked into the final, the main thing I'd be feeling was curiosity about which of my questions would turn up on the exam. It was like a game.",
            korean: "고백하자면 저도 대학 시절에 그랬습니다. 많은 수업에서 좋은 시험 문제로 만들기에 적합한 모양의 아이디어는 20~30개 정도밖에 없을 수 있다는 것을 알게 되었습니다. 이런 수업에서 제가 시험공부를 하는 방식은 (우연히 그런 경우를 제외하고는) 수업에서 가르치는 내용을 완벽히 익히는 것이 아니라, 예상 시험 문제 목록을 만들고 미리 답을 작성해보는 것이었습니다. 기말고사에 들어갈 때 제가 주로 느끼는 감정은 제 예상 문제 중 어떤 것이 시험에 나올지에 대한 호기심이었습니다. 마치 게임 같았죠.",
        },
        {
            english:
                "It's not surprising that after being trained for their whole lives to play such games, young founders' first impulse on starting a startup is to try to figure out the tricks for winning at this new game. Since fundraising appears to be the measure of success for startups (another classic noob mistake), they always want to know what the tricks are for convincing investors. We tell them the best way to convince investors is to make a startup that's actually doing well, meaning growing fast, and then simply tell investors so. Then they want to know what the tricks are for growing fast. And we have to tell them the best way to do that is simply to make something people want.",
            korean: "평생 그런 게임을 하도록 훈련받은 젊은 창업자들이 스타트업을 시작할 때 첫 번째 충동이 이 새로운 게임에서 이기기 위한 요령을 알아내려고 하는 것은 놀라운 일이 아닙니다. 자금 조달이 스타트업 성공의 척도로 보이기 때문에(또 다른 전형적인 초보자의 실수), 그들은 항상 투자자를 설득하기 위한 요령이 무엇인지 알고 싶어 합니다. 우리는 투자자를 설득하는 가장 좋은 방법은 실제로 잘 되고 있는, 즉 빠르게 성장하는 스타트업을 만들고 투자자들에게 그렇게 간단히 말하는 것이라고 말해줍니다. 그러면 그들은 빠르게 성장하기 위한 요령이 무엇인지 알고 싶어 합니다. 그러면 우리는 그 가장 좋은 방법은 단순히 사람들이 원하는 것을 만드는 것이라고 말해줘야 합니다.",
        },
        {
            english:
                'So many of the conversations YC partners have with young founders begin with the founder asking "How do we..." and the partner replying "Just..."',
            korean: 'YC 파트너들이 젊은 창업자들과 나누는 많은 대화는 창업자가 "어떻게 하면..."이라고 묻고 파트너가 "그냥..."이라고 답하는 것으로 시작됩니다.',
        },
        {
            english:
                "Why do the founders always make things so complicated? The reason, I realized, is that they're looking for the trick.",
            korean: "왜 창업자들은 항상 일을 그렇게 복잡하게 만들까요? 그 이유는, 제가 깨달은 바로는, 그들이 요령을 찾고 있기 때문입니다.",
        },
        {
            english:
                "So this is the third counterintuitive thing to remember about startups: starting a startup is where gaming the system stops working. Gaming the system may continue to work if you go to work for a big company. Depending on how broken the company is, you can succeed by sucking up to the right people, giving the impression of productivity, and so on. [2] But that doesn't work with startups. There is no boss to trick, only users, and all users care about is whether your product does what they want. Startups are as impersonal as physics. You have to make something people want, and you prosper only to the extent you do.",
            korean: "그래서 이것이 스타트업에 대해 기억해야 할 세 번째 직관에 반하는 것입니다: 스타트업을 시작하는 것은 시스템을 이용하는 것(gaming the system)이 더 이상 통하지 않는 곳입니다. 시스템을 이용하는 것은 대기업에 취직하면 계속 통할 수도 있습니다. 회사가 얼마나 망가졌느냐에 따라, 적절한 사람들에게 아첨하고, 생산적인 인상을 주는 등의 방법으로 성공할 수 있습니다. [2] 하지만 스타트업에서는 그것이 통하지 않습니다. 속일 상사도 없고, 오직 사용자만 있을 뿐이며, 사용자들이 신경 쓰는 것은 당신의 제품이 그들이 원하는 것을 하느냐 뿐입니다. 스타트업은 물리학처럼 비인격적입니다. 사람들이 원하는 것을 만들어야 하고, 그만큼만 번영할 수 있습니다.",
        },
        {
            english:
                "The dangerous thing is, faking does work to some degree on investors. If you're super good at sounding like you know what you're talking about, you can fool investors for at least one and perhaps even two rounds of funding. But it's not in your interest to. The company is ultimately doomed. All you're doing is wasting your own time riding it down.",
            korean: "위험한 점은, 속임수가 투자자들에게 어느 정도는 통한다는 것입니다. 만약 당신이 자신이 무슨 말을 하는지 아는 것처럼 들리게 하는 데 매우 능숙하다면, 적어도 한두 번의 투자 라운드 동안은 투자자들을 속일 수 있습니다. 하지만 그것은 당신에게 이익이 되지 않습니다. 그 회사는 결국 망하게 되어 있습니다. 당신은 단지 그것을 타고 내려가면서 자신의 시간만 낭비하고 있는 것입니다.",
        },
        {
            english:
                "So stop looking for the trick. There are tricks in startups, as there are in any domain, but they are an order of magnitude less important than solving the real problem. A founder who knows nothing about fundraising but has made something users love will have an easier time raising money than one who knows every trick in the book but has a flat usage graph. And more importantly, the founder who has made something users love is the one who will go on to succeed after raising the money.",
            korean: "그러니 요령을 찾으려 하지 마세요. 어떤 분야든 그렇듯이 스타트업에도 요령은 있지만, 그것은 실제 문제를 해결하는 것보다 훨씬 덜 중요합니다. 자금 조달에 대해 아무것도 모르지만 사용자들이 사랑하는 것을 만든 창업자는, 책에 있는 모든 요령을 알지만 사용량 그래프가 평평한 창업자보다 자금 조달이 더 쉬울 것입니다. 그리고 더 중요한 것은, 사용자들이 사랑하는 것을 만든 창업자가 자금 조달 후에도 계속 성공할 사람이라는 것입니다.",
        },
        {
            english:
                "Though in a sense it's bad news in that you're deprived of one of your most powerful weapons, I think it's exciting that gaming the system stops working when you start a startup. It's exciting that there even exist parts of the world where you win by doing good work. Imagine how depressing the world would be if it were all like school and big companies, where you either have to spend a lot of time on bullshit things or lose to people who do. [3] I would have been delighted if I'd realized in college that there were parts of the real world where gaming the system mattered less than others, and a few where it hardly mattered at all. But there are, and this variation is one of the most important things to consider when you're thinking about your future. How do you win in each type of work, and what would you like to win by doing? [4]",
            korean: "어떤 의미에서는 가장 강력한 무기 중 하나를 빼앗기는 것이라 나쁜 소식이지만, 스타트업을 시작하면 시스템을 이용하는 것이 더 이상 통하지 않는다는 점이 저는 흥미롭다고 생각합니다. 좋은 일을 함으로써 이길 수 있는 세상의 일부가 존재한다는 것 자체가 흥미롭습니다. 만약 세상이 온통 학교나 대기업처럼 쓸데없는 일에 많은 시간을 쏟거나 그렇게 하는 사람들에게 지는 곳이라면 얼마나 우울할지 상상해보세요. [3] 만약 제가 대학 시절에 현실 세계에는 시스템을 이용하는 것이 다른 곳보다 덜 중요하고, 거의 중요하지 않은 곳도 있다는 것을 깨달았다면 정말 기뻤을 것입니다. 하지만 그런 곳들이 있고, 이러한 다양성은 미래를 생각할 때 고려해야 할 가장 중요한 것 중 하나입니다. 각 유형의 일에서 어떻게 이길 수 있으며, 무엇을 함으로써 이기고 싶습니까? [4]",
        },
        {
            english:
                "All-Consuming\n\nThat brings us to our fourth counterintuitive point: startups are all-consuming. If you start a startup, it will take over your life to a degree you cannot imagine. And if your startup succeeds, it will take over your life for a long time: for several years at the very least, maybe for a decade, maybe for the rest of your working life. So there is a real opportunity cost here.",
            korean: "모든 것을 삼키는\n\n이것이 바로 네 번째 직관에 반하는 지점입니다: 스타트업은 모든 것을 삼켜버립니다. 스타트업을 시작하면 상상할 수 없는 수준으로 당신의 삶을 장악할 것입니다. 그리고 스타트업이 성공하면 아주 오랫동안, 적어도 몇 년, 어쩌면 10년, 혹은 남은 직장 생활 내내 당신의 삶을 지배할 것입니다. 따라서 여기에는 실질적인 기회비용이 존재합니다.",
        },
        {
            english:
                "Larry Page may seem to have an enviable life, but there are aspects of it that are unenviable. Basically at 25 he started running as fast as he could and it must seem to him that he hasn't stopped to catch his breath since. Every day new shit happens in the Google empire that only the CEO can deal with, and he, as CEO, has to deal with it. If he goes on vacation for even a week, a whole week's backlog of shit accumulates. And he has to bear this uncomplainingly, partly because as the company's daddy he can never show fear or weakness, and partly because billionaires get less than zero sympathy if they talk about having difficult lives. Which has the strange side effect that the difficulty of being a successful startup founder is concealed from almost everyone except those who've done it.",
            korean: "래리 페이지는 부러워할 만한 삶을 사는 것처럼 보일지 모르지만, 그의 삶에는 부럽지 않은 측면도 있습니다. 기본적으로 그는 25세에 최대한 빨리 달리기 시작했고, 그 이후로 숨 돌릴 틈 없이 달려온 것처럼 느껴질 것입니다. 매일 구글 제국에서는 CEO만이 처리할 수 있는 새로운 문제들이 발생하고, 그는 CEO로서 그것을 처리해야 합니다. 그가 일주일만 휴가를 가도 일주일 치의 문제들이 쌓입니다. 그리고 그는 불평 없이 이를 감당해야 하는데, 부분적으로는 회사 전체를 책임지는 아빠와 같은 존재로서 두려움이나 약점을 보여서는 안 되기 때문이고, 부분적으로는 억만장자들이 힘든 삶에 대해 이야기하면 동정은커녕 비난을 받기 때문입니다. 이는 성공한 스타트업 창업자가 되는 것의 어려움이 그것을 경험한 사람들을 제외한 거의 모든 사람에게 감춰지는 이상한 부작용을 낳습니다.",
        },
        {
            english:
                "Y Combinator has now funded several companies that can be called big successes, and in every single case the founders say the same thing. It never gets any easier. The nature of the problems change. You're worrying about construction delays at your London office instead of the broken air conditioner in your studio apartment. But the total volume of worry never decreases; if anything it increases.",
            korean: "Y Combinator는 이제 큰 성공이라고 불릴 만한 여러 회사에 자금을 지원했으며, 모든 경우에 창업자들은 똑같은 말을 합니다. 결코 쉬워지지 않는다는 것입니다. 문제의 본질은 바뀝니다. 원룸 아파트의 고장 난 에어컨 대신 런던 사무실의 공사 지연을 걱정하게 됩니다. 하지만 걱정의 총량은 결코 줄어들지 않습니다. 오히려 늘어날 뿐입니다.",
        },
        {
            english:
                "Starting a successful startup is similar to having kids in that it's like a button you push that changes your life irrevocably. And while it's truly wonderful having kids, there are a lot of things that are easier to do before you have them than after. Many of which will make you a better parent when you do have kids. And since you can delay pushing the button for a while, most people in rich countries do.",
            korean: "성공적인 스타트업을 시작하는 것은 아이를 갖는 것과 유사합니다. 마치 누르면 인생을 돌이킬 수 없이 바꾸는 버튼과 같습니다. 아이를 갖는 것은 정말 멋진 일이지만, 아이를 갖기 전보다 후에 하기가 더 어려운 일들이 많이 있습니다. 그중 많은 것들이 실제로 아이를 가졌을 때 당신을 더 나은 부모로 만들어 줄 것입니다. 그리고 그 버튼을 누르는 것을 잠시 미룰 수 있기 때문에, 부유한 국가의 대부분의 사람들은 그렇게 합니다.",
        },
        {
            english:
                "Yet when it comes to startups, a lot of people seem to think they're supposed to start them while they're still in college. Are you crazy? And what are the universities thinking? They go out of their way to ensure their students are well supplied with contraceptives, and yet they're setting up entrepreneurship programs and startup incubators left and right.",
            korean: "하지만 스타트업에 관해서는 많은 사람들이 대학에 재학 중에 시작해야 한다고 생각하는 것 같습니다. 제정신인가요? 그리고 대학들은 무슨 생각을 하는 걸까요? 학생들에게 피임약을 충분히 공급하기 위해 온갖 노력을 기울이면서, 동시에 기업가 정신 프로그램과 스타트업 인큐베이터를 좌우로 설립하고 있습니다.",
        },
        {
            english:
                "To be fair, the universities have their hand forced here. A lot of incoming students are interested in startups. Universities are, at least de facto, expected to prepare them for their careers. So students who want to start startups hope universities can teach them about startups. And whether universities can do this or not, there's some pressure to claim they can, lest they lose applicants to other universities that do.",
            korean: "솔직히 말해서, 대학들은 여기서 어쩔 수 없는 상황에 놓여 있습니다. 많은 신입생들이 스타트업에 관심이 있습니다. 대학들은 적어도 사실상 학생들의 경력을 준비시켜 줄 것으로 기대됩니다. 그래서 스타트업을 시작하고 싶은 학생들은 대학이 스타트업에 대해 가르쳐 줄 수 있기를 바랍니다. 그리고 대학이 이것을 할 수 있든 없든, 그렇게 할 수 있다고 주장해야 한다는 압박감이 어느 정도 있습니다. 그렇지 않으면 그렇게 하는 다른 대학에 지원자를 빼앗길 수 있기 때문입니다.",
        },
        {
            english:
                "Can universities teach students about startups? Yes and no. They can teach students about startups, but as I explained before, this is not what you need to know. What you need to learn about are the needs of your own users, and you can't do that until you actually start the company. [5] So starting a startup is intrinsically something you can only really learn by doing it. And it's impossible to do that in college, for the reason I just explained: startups take over your life. You can't start a startup for real as a student, because if you start a startup for real you're not a student anymore. You may be nominally a student for a bit, but you won't even be that for long. [6]",
            korean: "대학이 학생들에게 스타트업에 대해 가르칠 수 있을까요? 예, 아니오입니다. 학생들에게 스타트업에 대해 가르칠 수는 있지만, 앞에서 설명했듯이 이것은 당신이 알아야 할 것이 아닙니다. 당신이 배워야 할 것은 당신 자신의 사용자의 요구 사항이며, 실제로 회사를 시작하기 전까지는 그것을 할 수 없습니다. [5] 따라서 스타트업을 시작하는 것은 본질적으로 직접 해봐야만 제대로 배울 수 있는 것입니다. 그리고 방금 설명한 이유, 즉 스타트업이 당신의 삶을 장악하기 때문에 대학에서는 그것을 하는 것이 불가능합니다. 학생으로서 실제로 스타트업을 시작할 수는 없습니다. 왜냐하면 실제로 스타트업을 시작하면 더 이상 학생이 아니기 때문입니다. 명목상으로는 잠시 학생일 수 있지만, 오래가지 못할 것입니다. [6]",
        },
        {
            english:
                "Given this dichotomy, which of the two paths should you take? Be a real student and not start a startup, or start a real startup and not be a student? I can answer that one for you. Do not start a startup in college. How to start a startup is just a subset of a bigger problem you're trying to solve: how to have a good life. And though starting a startup can be part of a good life for a lot of ambitious people, age 20 is not the optimal time to do it. Starting a startup is like a brutally fast depth-first search. Most people should still be searching breadth-first at 20.",
            korean: "이러한 이분법을 감안할 때, 두 가지 길 중 어느 길을 택해야 할까요? 진짜 학생이 되어 스타트업을 시작하지 않거나, 진짜 스타트업을 시작하고 학생이 되지 않거나? 그 질문에 대한 답은 제가 해드릴 수 있습니다. 대학 시절에 스타트업을 시작하지 마십시오. 스타트업을 시작하는 방법은 당신이 해결하려는 더 큰 문제, 즉 좋은 삶을 사는 방법의 하위 집합일 뿐입니다. 그리고 스타트업을 시작하는 것이 야심 찬 많은 사람들에게 좋은 삶의 일부가 될 수 있지만, 20세는 그것을 하기에 최적의 시기가 아닙니다. 스타트업을 시작하는 것은 마치 잔인할 정도로 빠른 깊이 우선 탐색과 같습니다. 대부분의 사람들은 20세에는 여전히 너비 우선 탐색을 해야 합니다.",
        },
        {
            english:
                "You can do things in your early 20s that you can't do as well before or after, like plunge deeply into projects on a whim and travel super cheaply with no sense of a deadline. For unambitious people, this sort of thing is the dreaded \"failure to launch,\" but for the ambitious ones it can be an incomparably valuable sort of exploration. If you start a startup at 20 and you're sufficiently successful, you'll never get to do it. [7]",
            korean: '20대 초반에는 그 전이나 후에는 잘 할 수 없는 일들을 할 수 있습니다. 예를 들어 충동적으로 프로젝트에 깊이 빠져들거나 마감일에 대한 감각 없이 초저가로 여행하는 것과 같은 일들입니다. 야망이 없는 사람들에게 이런 종류의 일은 두려운 "발사 실패(failure to launch)"이지만, 야심 찬 사람들에게는 비교할 수 없이 귀중한 종류의 탐험이 될 수 있습니다. 만약 20세에 스타트업을 시작해서 충분히 성공한다면, 당신은 결코 그것을 할 기회를 갖지 못할 것입니다. [7]',
        },
        {
            english:
                "Mark Zuckerberg will never get to bum around a foreign country. He can do other things most people can't, like charter jets to fly him to foreign countries. But success has taken a lot of the serendipity out of his life. Facebook is running him as much as he's running Facebook. And while it can be very cool to be in the grip of a project you consider your life's work, there are advantages to serendipity too, especially early in life. Among other things it gives you more options to choose your life's work from.",
            korean: "마크 저커버그는 결코 외국에서 빈둥거릴 기회를 갖지 못할 것입니다. 그는 대부분의 사람들이 할 수 없는 다른 일들, 예를 들어 전세기를 타고 외국으로 날아가는 것과 같은 일들을 할 수 있습니다. 하지만 성공은 그의 삶에서 많은 예기치 않은 행운(serendipity)을 빼앗아 갔습니다. 페이스북이 그를 운영하는 만큼 그도 페이스북을 운영하고 있습니다. 그리고 자신의 평생의 사업이라고 생각하는 프로젝트에 사로잡혀 있는 것은 매우 멋질 수 있지만, 특히 인생 초반에는 예기치 않은 행운에도 장점이 있습니다. 무엇보다도 그것은 당신의 평생의 사업을 선택할 수 있는 더 많은 선택지를 제공합니다.",
        },
        {
            english:
                "There's not even a tradeoff here. You're not sacrificing anything if you forgo starting a startup at 20, because you're more likely to succeed if you wait. In the unlikely case that you're 20 and one of your side projects takes off like Facebook did, you'll face a choice of running with it or not, and it may be reasonable to run with it. But the usual way startups take off is for the founders to make them take off, and it's gratuitously stupid to do that at 20.",
            korean: "여기에는 절충안조차 없습니다. 20세에 스타트업 시작을 포기한다고 해서 아무것도 희생하는 것이 아닙니다. 기다리면 성공할 가능성이 더 높기 때문입니다. 만약 당신이 20세이고 당신의 부업 프로젝트 중 하나가 페이스북처럼 성공할 가능성은 거의 없지만, 그런 일이 생긴다면 그것을 계속할지 말지 선택에 직면하게 될 것이고, 그것을 계속하는 것이 합리적일 수 있습니다. 하지만 스타트업이 성공하는 일반적인 방법은 창업자들이 그것을 성공시키는 것이고, 20세에 그렇게 하는 것은 불필요하게 어리석은 일입니다.",
        },
        {
            english:
                "Try\n\nShould you do it at any age? I realize I've made startups sound pretty hard. If I haven't, let me try again: starting a startup is really hard. What if it's too hard? How can you tell if you're up to this challenge?",
            korean: "시도해보라\n\n어떤 나이에든 해야 할까요? 제가 스타트업을 꽤 어렵게 들리도록 만들었다는 것을 압니다. 그렇지 않다면 다시 한번 말하죠: 스타트업을 시작하는 것은 정말 어렵습니다. 너무 어렵다면 어떨까요? 이 도전에 감당할 수 있는지 어떻게 알 수 있을까요?",
        },
        {
            english:
                "The answer is the fifth counterintuitive point: you can't tell. Your life so far may have given you some idea what your prospects might be if you tried to become a mathematician, or a professional football player. But unless you've had a very strange life you haven't done much that was like being a startup founder. Starting a startup will change you a lot. So what you're trying to estimate is not just what you are, but what you could grow into, and who can do that?",
            korean: "그 답은 다섯 번째 직관에 반하는 점입니다: 당신은 알 수 없다는 것입니다. 지금까지의 당신의 삶은 당신이 수학자나 프로 축구 선수가 되려고 했다면 당신의 전망이 어떨지에 대한 약간의 아이디어를 주었을지도 모릅니다. 하지만 아주 이상한 삶을 살지 않았다면 스타트업 창업자가 되는 것과 비슷한 일을 많이 해보지 않았을 것입니다. 스타트업을 시작하면 당신은 많이 변할 것입니다. 그래서 당신이 추정하려는 것은 당신이 지금 어떤 사람인지 뿐만 아니라 당신이 어떤 사람으로 성장할 수 있는지이며, 누가 그것을 할 수 있을까요?",
        },
        {
            english:
                "For the past 9 years it was my job to predict whether people would have what it took to start successful startups. It was easy to tell how smart they were, and most people reading this will be over that threshold. The hard part was predicting how tough and ambitious they would become. There may be no one who has more experience at trying to predict that, so I can tell you how much an expert can know about it, and the answer is: not much. I learned to keep a completely open mind about which of the startups in each batch would turn out to be the stars.",
            korean: "지난 9년 동안 제 일은 사람들이 성공적인 스타트업을 시작하는 데 필요한 자질을 갖추고 있는지 예측하는 것이었습니다. 그들이 얼마나 똑똑한지 알기는 쉬웠고, 이 글을 읽는 대부분의 사람들은 그 기준을 넘을 것입니다. 어려운 부분은 그들이 얼마나 강인하고 야심 차게 될지 예측하는 것이었습니다. 그것을 예측하려고 노력한 경험이 저보다 많은 사람은 없을 것이므로, 전문가가 그것에 대해 얼마나 알 수 있는지 말씀드릴 수 있습니다. 답은: 별로 없다는 것입니다. 저는 각 기수의 스타트업 중 어느 것이 스타가 될지에 대해 완전히 열린 마음을 갖는 법을 배웠습니다.",
        },
        {
            english:
                "The founders sometimes think they know. Some arrive feeling sure they will ace Y Combinator just as they've aced every one of the (few, artificial, easy) tests they've faced in life so far. Others arrive wondering how they got in, and hoping YC doesn't discover whatever mistake caused it to accept them. But there is little correlation between founders' initial attitudes and how well their companies do.",
            korean: "창업자들은 때때로 자신들이 안다고 생각합니다. 어떤 사람들은 지금까지 인생에서 직면했던 (몇 안 되는, 인위적이고, 쉬운) 모든 시험에서 만점을 받았던 것처럼 Y Combinator에서도 만점을 받을 것이라고 확신하며 도착합니다. 다른 사람들은 어떻게 들어왔는지 궁금해하며 YC가 자신들을 받아들인 실수를 발견하지 않기를 바라며 도착합니다. 하지만 창업자들의 초기 태도와 회사 성과 사이에는 거의 상관관계가 없습니다.",
        },
        {
            english:
                "I've read that the same is true in the military — that the swaggering recruits are no more likely to turn out to be really tough than the quiet ones. And probably for the same reason: that the tests involved are so different from the ones in their previous lives.",
            korean: "군대에서도 마찬가지라는 글을 읽은 적이 있습니다. 거들먹거리는 신병들이 조용한 신병들보다 더 강인해질 가능성이 높지 않다는 것입니다. 그리고 아마도 같은 이유일 것입니다. 관련된 시험들이 이전 삶의 시험들과 너무 다르기 때문입니다.",
        },
        {
            english:
                "If you're absolutely terrified of starting a startup, you probably shouldn't do it. But if you're merely unsure whether you're up to it, the only way to find out is to try. Just not now.",
            korean: "만약 스타트업을 시작하는 것이 극도로 두렵다면, 아마도 하지 말아야 합니다. 하지만 자신이 감당할 수 있을지 확신이 서지 않는다면, 알아낼 수 있는 유일한 방법은 시도해보는 것입니다. 단, 지금은 아닙니다.",
        },
    ],
};
