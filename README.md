1) Check if the letter is a vowel.
input: o
output: true

 input: t
 output: false
---------------------------------------------
1.1)If the first letter is a vowel, add "ay" to the end of the word
input: elephant
out: elephantay
---------------------------------------------
2) Check if the first letter is a consonant.
input: computer
output: true

3) If word begins in one or more consonants, move them all to the end, and add "ay"
input: frog
output: ogfray

4) If first consonants include "qu", move "u" along with "q", and add "ay"
input: queen
output: eenquay

5) If first consonants include "qu", but don't start with "qu", move each character before "qu" along with "qu",  and add "ay"

input: squeel
output: eelsquay

5) If first letter is "y", "y" is a consonant
input: yellow
output: ellowyay

6) Make sure only first letter of first word is capitalized

1) Do nothing to non letter characters in string
input: 3
output: 3
