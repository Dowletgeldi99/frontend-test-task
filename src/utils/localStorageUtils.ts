const COMPLETIONS_KEY = "onboardingCompletions";

export const getCompletions = (): number => {
    const completions = localStorage.getItem(COMPLETIONS_KEY);
    return completions ? parseInt(completions, 10) : 0;
};

export const incrementCompletions = (): void => {
    const currentCompletions = getCompletions();
    localStorage.setItem(COMPLETIONS_KEY, (currentCompletions + 1).toString());
};
