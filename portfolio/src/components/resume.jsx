import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const RESUME_PATH = '/resume.pdf';

const Resume = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <section id="resume" className="py-20 relative bg-black/20">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="text-primary">Resume</span>
                        </h2>
                        <div className="h-1 w-20 bg-secondary rounded-full" />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <a
                            href={RESUME_PATH}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-gray-300 hover:text-primary hover:border-primary/40 transition-all text-sm font-medium"
                        >
                            <ExternalLink size={16} />
                            Open in Tab
                        </a>
                        <a
                            href={RESUME_PATH}
                            download="Akshat_Saini_Resume.pdf"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] text-sm"
                        >
                            <Download size={16} />
                            Download PDF
                        </a>
                    </div>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative glass rounded-2xl border border-white/10 overflow-hidden"
                    style={{ minHeight: '800px' }}
                >
                    {/* Glow border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none z-0" />

                    {/* Loading state */}
                    {!loaded && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                            <FileText className="w-16 h-16 text-primary/40 animate-pulse" />
                            <p className="text-gray-500 text-sm font-mono tracking-widest">LOADING RESUME...</p>
                        </div>
                    )}

                    <iframe
                        src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
                        title="Akshat Saini Resume"
                        onLoad={() => setLoaded(true)}
                        className="w-full relative z-10"
                        style={{ height: '850px', border: 'none', background: 'transparent' }}
                    />
                </motion.div>

                {/* Fallback note */}
                <p className="text-center text-gray-600 text-xs mt-4 font-mono">
                    If the PDF doesn't load, use the "Open in Tab" or "Download" buttons above.
                </p>
            </div>
        </section>
    );
};

export default Resume;
