import React, { useState, useRef } from 'react';
import { Upload, FileText, MessageSquare, Plus, X, File, Image, FileType, ArrowLeft, Home } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  notes: string;
}

interface UserInteractionSectionProps {
  onBackToHome: () => void;
}

const UserInteractionSection: React.FC<UserInteractionSectionProps> = ({ onBackToHome }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [query, setQuery] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        notes: ''
      };
      setUploadedFiles(prev => [...prev, newFile]);
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const updateFileNotes = (fileId: string, notes: string) => {
    setUploadedFiles(prev => 
      prev.map(file => 
        file.id === fileId ? { ...file, notes } : file
      )
    );
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.includes('pdf')) return FileType;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 transition-all duration-300 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>
          
          <div className="flex items-center gap-2">
            <Home size={20} className="text-yellow-400" />
            <span className="text-white font-semibold">Interactive Workspace</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive <span className="text-yellow-400">Workspace</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Upload your documents, add notes, and interact with your content using AI-powered insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* File Upload Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Upload className="text-yellow-400" size={28} />
              Upload Documents
            </h3>
            
            {/* Upload Area */}
            <div
              className={`relative p-8 rounded-2xl border-2 border-dashed transition-all duration-300 ${
                dragActive 
                  ? 'border-yellow-400 bg-yellow-400/10' 
                  : 'border-white/30 bg-white/10'
              } backdrop-blur-md hover:bg-white/15 cursor-pointer`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.docx,.doc,.txt,.jpg,.jpeg,.png,.gif"
                onChange={handleFileInput}
                className="hidden"
              />
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Upload size={32} className="text-yellow-400" />
                </div>
                <p className="text-white font-semibold mb-2">
                  Drop files here or click to browse
                </p>
                <p className="text-gray-400 text-sm">
                  Supports PDF, DOCX, TXT, JPG, PNG and more
                </p>
              </div>
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Uploaded Files</h4>
                {uploadedFiles.map((file) => {
                  const FileIcon = getFileIcon(file.type);
                  return (
                    <div key={file.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                          <FileIcon size={20} className="text-yellow-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-white font-medium truncate">{file.name}</p>
                            <button
                              onClick={() => removeFile(file.id)}
                              className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">{formatFileSize(file.size)}</p>
                          <textarea
                            placeholder="Add notes for this file..."
                            value={file.notes}
                            onChange={(e) => updateFileNotes(file.id, e.target.value)}
                            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-yellow-400/50 transition-colors duration-200"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Query Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <MessageSquare className="text-yellow-400" size={28} />
              Ask Questions
            </h3>
            
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <textarea
                placeholder="Type your questions or comments here... For example: 'Summarize the key findings from the uploaded research paper' or 'Generate quiz questions based on this document'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-40 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-yellow-400/50 transition-colors duration-200"
              />
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-400 text-sm">
                  {query.length}/500 characters
                </p>
                <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  Process Query
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 text-left group">
                <FileText className="text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={24} />
                <p className="text-white font-medium text-sm">Summarize Documents</p>
              </button>
              <button className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 text-left group">
                <Plus className="text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={24} />
                <p className="text-white font-medium text-sm">Generate Quiz</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInteractionSection;