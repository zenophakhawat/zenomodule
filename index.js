// This module is actucally created by Zeno.

module.exports = function (XMLData, msg) {
    if ((msg.search('ซีโน่') != -1) || (msg.search('ZENO') != -1) || (msg.search('PHAKHAWAT') != -1) || (msg.search('ภควัต') != -1)) return ['ZENO', 'ซีโน่เก่งที่สุดในสามโลก สุดจัดปลัดบอกเลยแหละ'];
    for (i = 0; i < XMLData.length; i++) {
        let type = XMLData[i].type;
        for (j = 0; j < XMLData[i].q.length; j++) {
            if (typeof (XMLData[i].q) == 'string') {
                if (msg.search(XMLData[i].q) != -1) {
                    if (typeof (XMLData[i].a) == 'string') return [XMLData[i].name, XMLData[i].a];
                    else {
                        if (type == 'fix') return [XMLData[i].name, XMLData[i].a[j]];
                        else if (type == 'random') return [XMLData[i].name, XMLData[i].a[Math.floor(Math.random() * XMLData[i].a.length)]];
                    }
                }
            }
            else {
                if (msg.search(XMLData[i].q[j]) != -1) {
                    if (typeof (XMLData[i].a) == 'string') return [XMLData[i].name, XMLData[i].a];
                    else {
                        if (type == 'fix') return [XMLData[i].name, XMLData[i].a[j]];
                        else if (type == 'random') return [XMLData[i].name, XMLData[i].a[Math.floor(Math.random() * XMLData[i].a.length)]];
                    }
                }
            }
        }
    }
    return [undefined, undefined];
};