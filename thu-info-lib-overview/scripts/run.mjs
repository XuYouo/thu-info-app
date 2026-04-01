#!/usr/bin/env node

const domains = [
  ["thu-info-lib-auth", "login, logout, cookies, roaming, 2FA, trusted devices"],
  ["thu-info-lib-academic", "report, evaluation, physical exam, classrooms, degree plan, THOS, course registration"],
  ["thu-info-lib-schedule", "official schedule, custom schedule upload/delete, calendar data"],
  ["thu-info-lib-news", "news list, search, detail, subscriptions, favorites"],
  ["thu-info-lib-reservations", "library seats, library rooms, sports, reserves library"],
  ["thu-info-lib-finance", "campus card, recharge, invoices, bank payment, graduate income"],
  ["thu-info-lib-dorm-life", "dorm score, electricity, dorm-password reset"],
  ["thu-info-lib-network", "usereg login, balances, account info, devices"],
  ["thu-info-lib-services", "announcements, feedback, version, privacy, GitLab, mail, countdown"],
];

console.log("THU Info standalone skills");
console.log("");
console.log("Each domain skill carries its own runner in scripts/run.mjs.");
console.log("Use the domain runner directly instead of depending on an external code copy.");
console.log("");
console.log("Available domain skills:");
for (const [name, summary] of domains) {
  console.log(`- ${name}: ${summary}`);
}
console.log("");
console.log("Example:");
console.log("  node scripts/run.mjs getReport '[false,true]' --user <id> --password <password>");
