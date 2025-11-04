/**
 * Interactive Code Playground
 * Allows users to write HTML/CSS/JS and see live preview
 */

function initCodePlayground() {
    const playgrounds = document.querySelectorAll('.code-playground');

    playgrounds.forEach(playground => {
        const htmlEditor = playground.querySelector('.html-editor');
        const cssEditor = playground.querySelector('.css-editor');
        const jsEditor = playground.querySelector('.js-editor');
        const preview = playground.querySelector('.code-preview');
        const runButton = playground.querySelector('.run-code');
        const resetButton = playground.querySelector('.reset-code');
        const tabs = playground.querySelectorAll('.playground-tab');

        // Default code templates
        const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>Welcome to web development!</p>
</body>
</html>`;

        const defaultCSS = `body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

h1 {
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}`;

        const defaultJS = `// Try changing the message!
const message = "Learning JavaScript is fun!";
console.log(message);

// Add interactivity
document.body.addEventListener('click', function() {
    alert('You clicked the page!');
});`;

        // Initialize editors with default content
        if (htmlEditor) htmlEditor.value = defaultHTML;
        if (cssEditor) cssEditor.value = defaultCSS;
        if (jsEditor) jsEditor.value = defaultJS;

        // Tab switching
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const target = this.dataset.tab;
                playground.querySelectorAll('.editor-pane').forEach(pane => {
                    pane.style.display = 'none';
                });
                playground.querySelector(`.${target}-pane`).style.display = 'block';
            });
        });

        // Run code function
        function runCode() {
            const html = htmlEditor ? htmlEditor.value : '';
            const css = cssEditor ? cssEditor.value : '';
            const js = jsEditor ? jsEditor.value : '';

            const previewDocument = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>
                        try {
                            ${js}
                        } catch (error) {
                            console.error('JavaScript Error:', error);
                            document.body.innerHTML += '<div style="background: #EF4444; color: white; padding: 10px; margin: 10px; border-radius: 5px;">JavaScript Error: ' + error.message + '</div>';
                        }
                    <\/script>
                </body>
                </html>
            `;

            // Clear previous content
            preview.innerHTML = '';

            // Create iframe for preview
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '0.75rem';

            preview.appendChild(iframe);

            // Write content to iframe
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(previewDocument);
            iframeDoc.close();
        }

        // Run code on button click
        if (runButton) {
            runButton.addEventListener('click', runCode);
        }

        // Auto-run on load
        setTimeout(runCode, 500);

        // Reset code
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                if (htmlEditor) htmlEditor.value = defaultHTML;
                if (cssEditor) cssEditor.value = defaultCSS;
                if (jsEditor) jsEditor.value = defaultJS;
                runCode();
            });
        }

        // Add keyboard shortcut (Ctrl/Cmd + Enter to run)
        [htmlEditor, cssEditor, jsEditor].forEach(editor => {
            if (editor) {
                editor.addEventListener('keydown', function(e) {
                    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                        e.preventDefault();
                        runCode();
                    }

                    // Tab key support
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        const start = this.selectionStart;
                        const end = this.selectionEnd;
                        this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                        this.selectionStart = this.selectionEnd = start + 4;
                    }
                });
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodePlayground);
} else {
    initCodePlayground();
}
