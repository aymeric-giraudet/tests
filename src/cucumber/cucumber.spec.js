import { loadFeatures, autoBindSteps } from "jest-cucumber";

import { formSteps } from "./Form.steps";

const features = loadFeatures("**/*.feature");
autoBindSteps(features, [formSteps]);
