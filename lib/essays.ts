import { aWordToTheResourceful } from "@/data/essays/a-word-to-the-resourceful";
import { beforeTheStartup } from "@/data/essays/before-the-startup";
import { defaultAliveOrDefaultDead } from "@/data/essays/default-alive-or-default-dead";
import { doThingsThatDontScale } from "@/data/essays/do-things-that-dont-scale";
import { ramenProfitable } from "@/data/essays/ramen-profitable";
import { startupEqualsGrowth } from "@/data/essays/startup-equals-growth";
import { the18MistakesThatKillStartups } from "@/data/essays/the-18-mistakes-that-kill-startups";
import { theTopIdeaInYourMind } from "@/data/essays/the-top-idea-in-your-mind";
import { thingsTakeTime } from "@/data/essays/things-take-time";
import { whatWeLookForInFounders } from "@/data/essays/what-we-look-for-in-founders";
import { Essay } from "./types";

export const essays: Essay[] = [
    doThingsThatDontScale,
    startupEqualsGrowth,
    defaultAliveOrDefaultDead,
    ramenProfitable,
    the18MistakesThatKillStartups,
    beforeTheStartup,
    whatWeLookForInFounders,
    aWordToTheResourceful,
    theTopIdeaInYourMind,
    thingsTakeTime,
];

export function getEssayBySlug(slug: string): Essay | undefined {
    return essays.find((essay) => essay.slug === slug);
}

export function getAllEssays(): Essay[] {
    return essays;
}

export function getTranslatedEssays(): Essay[] {
    return essays.filter((essay) => essay.type === "translated");
}

export function getKoreanOnlyEssays(): Essay[] {
    return essays.filter((essay) => essay.type === "korean-only");
}
