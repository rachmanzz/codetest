import React, {useEffect, useRef} from "react";
const GistFrame: React.FC<{id: string, file?: string, rawStyle?: string}> =({id, file, rawStyle}) => {

    const ref = useRef<HTMLIFrameElement>(null)
    const _elid = `gist-${(file ? id + '-' + file : id)}`;

    useEffect(()=> {
        if (ref) {
            const _document = ref.current?.contentDocument || ref.current?.contentWindow?.document;
            if (_document) {
                const _url = `https://gist.github.com/${(file? id + '.js' + file : id + '.js')}`;
                const _script = `<script type="text/javascript" src="${_url}"></script>`;
                const _styles = `<style>${rawStyle || '*{font-size:12px;}'}</style>`;
                const onLoadScript = `onload="parent.document.getElementById('${_elid}').style.height=document.body.scrollHeight + 'px'"`;
                const iframeHtml = `<html><head><base target="_parent">${_styles}</head><body ${onLoadScript}>${_script}</body></html>`;

                _document.open()
                _document.writeln(iframeHtml)
                _document.close()
            }
        }
    }, [id, file, rawStyle, _elid])



    return (<iframe style={{width: `100%`}} frameBorder={0} ref={ref} id={_elid} />);
}

export default GistFrame;
