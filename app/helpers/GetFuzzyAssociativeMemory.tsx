const temperatureTranslationCamelCase = [
  "cold",
  "cool",
  "moderate",
  "warm",
  "hot",
];
const waterIntakeTranslationCamelCase = [
  "veryLow",
  "low",
  "moderate",
  "high",
  "veryHigh",
];
const stepsTranslationCamelCase = [
  "sedentary",
  "lowActivity",
  "moderateActivity",
  "active",
  "veryActive",
];

const temperatureTranslationNormal = [
  "Cold",
  "Cool",
  "Moderate",
  "Warm",
  "Hot",
];
const waterIntakeTranslationNormal = [
  "Very Low",
  "Low ",
  "Moderate",
  "High",
  "Very High",
];
const stepsTranslationNormal = [
  "Sedentary",
  "Low Activity",
  "Moderate Activity",
  "Active",
  "Very Active",
];

export const getFuzzyAssociativeMemory = () => {
  const rules = [];

  for (let steps = 0; steps < 5; steps++) {
    for (let temperature = 0; temperature < 5; temperature++) {
      for (
        let currentWaterIntake = 0;
        currentWaterIntake < 5;
        currentWaterIntake++
      ) {
        rules.push({
          temperature: {
            numericalCategory: temperature + 1,
            textualCategory: temperatureTranslationNormal[temperature],
						camelCategory: temperatureTranslationCamelCase[temperature],
          },
          currentWaterIntake: {
            numericalCategory: currentWaterIntake + 1,
            textualCategory: waterIntakeTranslationNormal[currentWaterIntake],
						camelCategory: waterIntakeTranslationCamelCase[currentWaterIntake],
          },
          steps: {
            numericalCategory: steps + 1,
            textualCategory: stepsTranslationNormal[steps],
						camelCategory: stepsTranslationCamelCase[steps],
          },
          recommendedWaterIntake: {
            numericalCategory: Math.ceil(
              (1 / 3) * (temperature + 1) +
                (1 / 3) * (6 - (currentWaterIntake + 1)) +
                (1 / 3) * (steps + 1)
            ),
            textualCategory:
              waterIntakeTranslationNormal[
                Math.ceil(
                  (1 / 3) * (temperature + 1) +
                    (1 / 3) * (6 - (currentWaterIntake + 1)) +
                    (1 / 3) * (steps + 1)
                )
              ],
						camelCategory:
              waterIntakeTranslationCamelCase[
                Math.ceil(
                  (1 / 3) * (temperature + 1) +
                    (1 / 3) * (6 - (currentWaterIntake + 1)) +
                    (1 / 3) * (steps + 1)
                )
              ],
          },
        });
      }
    }
  }

	return rules;
};

export const fuzzyAssociativeMemory = getFuzzyAssociativeMemory();