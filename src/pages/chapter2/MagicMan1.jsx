import React, { useState, useEffect } from 'react';
import DialogueHandler from '../../components/dialogue';

const script=[{
    character:'magic',
    emotion:'talk',
    text:"MAAAAGIIC MAAAAN!",
    side:true
},
{
    character:'jake',
    emotion:'mad',
    text:"GOD DAMN YOU MAGIC MAN!",
    side:false
},
{
    character:'finn',
    emotion:'mad',
    text:"HEYAAAAA!",
    side:false
},
{
    character:'magic',
    emotion:'talk',
    text:"WOAH WHAT THE HECK MAN!",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"If I wasn't MAGICAL I would have totaly been killed!",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"Now, Which one of you disturbed my slumber?",
    side:true
},
{
    character:'jake',
    emotion:'talk',
    text:"This guy, it was not us, I didn't even touch BMO I swear.",
    side:false
},
{
    character:'magic',
    emotion:'talk',
    text:"Well now Jake, I know who and why, but now prepare to die!",
    side:true
},
{
    character:'finn',
    emotion:'mad',
    text:"Not So fast, QUICK GET HIM",
    side:false
},
{
    character:'magic',
    emotion:'talk',
    text:"If you want to get me, you'll have to find me",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"At the top of the tree,",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"To the gum tree you'll see,",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"The evil man with his evil plan,",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"To take who he wants,",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"If you stop this man,",
    side:true
},
{
    character:'magic',
    emotion:'talk',
    text:"I'll turn the world back to normal, ah ah ah ah",
    side:true
},

]
const MagicMan1 = () =>{
    const [lineCount, setLineCount] = useState(0);
    return(
        <div className="chapter1bedroom">
            <DialogueHandler
                script={script}
                object={script[lineCount]}
                lineCount={lineCount}
                setLineCount={setLineCount}
                linkTo={"./chapter1part3BMO1"}
            />            
        </div>
    );

}

export default MagicMan1;