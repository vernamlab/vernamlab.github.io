import React, { useEffect, useRef } from 'react';

export default function BibBaseEmbed({ bibUrl, noBootstrap = true }) {
  const iframeRef = useRef(null);
  const instanceId = useRef(`bibbase_iframe_${Math.random().toString(36).substr(2, 9)}`).current;

  useEffect(() => {
    if (!iframeRef.current) return;

    let src = `https://bibbase.org/show?bib=${encodeURIComponent(bibUrl)}`;
    if (noBootstrap) {
      src += '&noBootstrap=1';
    }
    // Add any other parameters BibBase might support for iframe embedding if needed
    // For example, &theme=default (though this might require BibBase to support it for iframes)

    iframeRef.current.src = src;

    // Optional: Add onload/onerror handlers to the iframe if needed for feedback
    // iframeRef.current.onload = () => console.log('[BibBaseEmbed] Iframe loaded.');
    // iframeRef.current.onerror = () => console.error('[BibBaseEmbed] Iframe failed to load.');

    return () => {
      // Cleanup: Clear the iframe src on unmount to stop loading/prevent memory leaks
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
    };
  }, [bibUrl, noBootstrap]);

  // Basic styling for the iframe to make it visible and take up some space.
  // You might want to adjust this or make it configurable via props.
  const iframeStyle = {
    width: '100%',
    minHeight: '500px', // Adjust as needed
    border: '1px solid #ccc', // Optional: for visibility
  };

  return (
    <iframe 
      ref={iframeRef}
      title={`BibBase Publications for ${instanceId}`}
      style={iframeStyle}
      // sandbox="allow-scripts allow-same-origin" // Consider sandbox attributes for security
                                                    // However, this might break BibBase if it needs more permissions.
                                                    // Start without it and add if BibBase works and you want to tighten security.
    ></iframe>
  );
} 