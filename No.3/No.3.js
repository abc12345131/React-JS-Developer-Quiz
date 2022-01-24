let obj = {'SPANISH':SPANISH_FUDGE, 'FRENCH':FRENCH_FUDGE, 'ENGLISH':ENGLISH_FUDGE}
if (recipe == 'FRENCH') {
    chocolate = 7;
}
fudge = recipe in obj ? obj[recipe] : 1
amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;