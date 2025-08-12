// * **用户模型（User）**：

//   * `id`（自动生成）
//   * `email`（用于注册和登录）
//   * `password`（加密存储）
//   * `createdSurveys`（数组，存储用户创建的问卷ID）

type User = {
    id: string;
    email: string;
    password: string;
    createdSurveys: string[]
}

// * **问卷模型（Survey）**：

//   * `id`（自动生成）
//   * `userId`（问卷创建者的用户ID）
//   * `title`（问卷标题）
//   * `description`（问卷描述）
//   * `questions`（问题列表，包含问题文本和类型）
//   * `createdAt`（创建时间）

type Survey = {
    id: string;
    userId: string;
    title: string;
    description: string;
    questions: string[];
    createdAt: Date;
    finishedAt: Date;
}

// * **问题模型（Question）**：

//   * `id`（自动生成）
//   * `surveyId`（关联问卷ID）
//   * `questionText`（问题文本）
//   * `questionType`（如：单选、多选、文本）
//   * `options`（仅限单选和多选问题，保存选项）

type Question = {
    id: string;
    surveyId: string;
    questionText: string;
    questionType: 'text' | 'choice' | 'multi-choice'
}

// * **答案模型（Answer）**：

//   * `id`（自动生成）
//   * `surveyId`（关联问卷ID）
//   * `answers`（数组，存储用户的答案）

type Answer = {
    id: string;
    surveyId: string;
    answers: [];
}