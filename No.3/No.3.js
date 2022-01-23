
if (recipe == 'SPANISH' || 'FRENCH' || 'ENGLISH') {
    if (recipe == 'FRENCH') {
        chocolate = 7;
    }
    //if eval() is allowed
    //fudge = eval(recipe + '_FUDGE');

    //if eval() is now allowed for safety issue
    obj={'SPANISH':SPANISH_FUDGE, 'FRENCH':FRENCH_FUDGE, 'ENGLISH':ENGLISH_FUDGE}
    fudge = obj[recipe]      
} else {
    fudge = 1;
}
amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;
 