'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { 
  Hand, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Smartphone,
  Gamepad2,
  Eye,
  EyeOff,
  Zap,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Fingerprint,
  Vibrate,
  Crosshair,
  Target,
  Timer,
  Activity
} from 'lucide-react';

// Gesture Components
const SwipeGestureDemo = () => {
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);
  const [swipeCount, setSwipeCount] = useState(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (Math.abs(offset.x) > swipeThreshold || Math.abs(velocity.x) > velocityThreshold) {
      const direction = offset.x > 0 ? 'right' : 'left';
      setSwipeDirection(direction);
      setSwipeCount(prev => prev + 1);
      
      // Simulate haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      
      setTimeout(() => setSwipeDirection(null), 1000);
    } else if (Math.abs(offset.y) > swipeThreshold || Math.abs(velocity.y) > velocityThreshold) {
      const direction = offset.y > 0 ? 'down' : 'up';
      setSwipeDirection(direction);
      setSwipeCount(prev => prev + 1);
      
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      
      setTimeout(() => setSwipeDirection(null), 1000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Hand className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
          Swipe Gestures
        </h3>
        <div className="ml-auto text-sm text-slate-500 dark:text-slate-400">
          Swipes: {swipeCount}
        </div>
      </div>

      <div className="relative">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.05 }}
          whileDrag={{ scale: 1.1, rotate: 5 }}
          className="w-full h-48 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-hidden"
        >
          <div className="text-center text-white">
            <Move className="h-8 w-8 mx-auto mb-2" />
            <div className="font-semibold">Swipe me!</div>
            <div className="text-sm opacity-75">Any direction</div>
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
        </motion.div>

        {/* Direction Indicator */}
        {swipeDirection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-black/80 text-white px-4 py-2 rounded-lg font-semibold">
              Swiped {swipeDirection}!
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="font-medium text-slate-900 dark:text-white">Supported Gestures</div>
          <div className="text-slate-600 dark:text-slate-400">↑ ↓ ← → swipes</div>
        </div>
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="font-medium text-slate-900 dark:text-white">Haptic Feedback</div>
          <div className="text-slate-600 dark:text-slate-400">Vibration on action</div>
        </div>
      </div>
    </div>
  );
};

const PinchZoomDemo = () => {
  const scale = useMotionValue(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const delta = event.deltaY * -0.01;
    const newScale = Math.max(0.5, Math.min(3, scale.get() + delta));
    scale.set(newScale);
    setZoomLevel(Math.round(newScale * 100));
  };

  const resetZoom = () => {
    scale.set(1);
    setZoomLevel(100);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <ZoomIn className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
          Pinch to Zoom
        </h3>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {zoomLevel}%
          </span>
          <button
            onClick={resetZoom}
            className="p-1 rounded bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div 
        className="relative h-64 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
      >
        <motion.div
          style={{ scale }}
          className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
        >
          <div className="text-center text-white">
            <Target className="h-12 w-12 mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">Zoom Target</div>
            <div className="text-lg opacity-75">Use scroll wheel or pinch gesture</div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => {
            const newScale = Math.max(0.5, scale.get() - 0.25);
            scale.set(newScale);
            setZoomLevel(Math.round(newScale * 100));
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
        >
          <ZoomOut className="h-4 w-4" />
          Zoom Out
        </button>
        <button
          onClick={() => {
            const newScale = Math.min(3, scale.get() + 0.25);
            scale.set(newScale);
            setZoomLevel(Math.round(newScale * 100));
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors"
        >
          <ZoomIn className="h-4 w-4" />
          Zoom In
        </button>
      </div>
    </div>
  );
};

const VoiceControlDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [command, setCommand] = useState('');
  const [responses, setResponses] = useState<string[]>([]);

  const voiceCommands = [
    { trigger: 'fire', response: 'Target acquired! Taking the shot.' },
    { trigger: 'reload', response: 'Reloading weapon. Stand by.' },
    { trigger: 'range clear', response: 'Range is clear and safe for shooting.' },
    { trigger: 'ceasefire', response: 'Ceasefire called. All weapons safe.' },
    { trigger: 'score', response: 'Current score: 94 out of 100.' },
    { trigger: 'next target', response: 'Moving to next target position.' }
  ];

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        const randomCommand = voiceCommands[Math.floor(Math.random() * voiceCommands.length)];
        setCommand(randomCommand.trigger);
        setResponses(prev => [randomCommand.response, ...prev.slice(0, 4)]);
        
        // Simulate speech synthesis
        if (!isMuted && 'speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(randomCommand.response);
          speechSynthesis.speak(utterance);
        }
        
        setIsListening(false);
      }, 2000);
    } else {
      setCommand('');
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Mic className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
          Voice Commands
        </h3>
        <div className="ml-auto">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="text-center mb-6">
        <motion.button
          onClick={toggleListening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
              : 'bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white'
          }`}
        >
          {isListening ? (
            <div className="text-center">
              <Activity className="h-8 w-8 mx-auto animate-bounce" />
            </div>
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </motion.button>
        
        <div className="mt-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {isListening ? 'Listening for commands...' : 'Click to start voice control'}
          </div>
          
          {command && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg"
            >
              <div className="font-medium">Command: "{command}"</div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Available Commands */}
      <div className="mb-6">
        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Available Commands:</h4>
        <div className="grid grid-cols-2 gap-2">
          {voiceCommands.map((cmd, index) => (
            <button
              key={index}
              onClick={() => {
                setCommand(cmd.trigger);
                setResponses(prev => [cmd.response, ...prev.slice(0, 4)]);
                if (!isMuted && 'speechSynthesis' in window) {
                  const utterance = new SpeechSynthesisUtterance(cmd.response);
                  speechSynthesis.speak(utterance);
                }
              }}
              className="p-2 text-left text-sm bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors"
            >
              "{cmd.trigger}"
            </button>
          ))}
        </div>
      </div>

      {/* Response History */}
      {responses.length > 0 && (
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Response History:</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {responses.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-sm"
              >
                {response}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const HapticFeedbackDemo = () => {
  const [feedbackType, setFeedbackType] = useState<'light' | 'medium' | 'heavy'>('medium');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported('vibrate' in navigator);
  }, []);

  const triggerHaptic = (pattern: number | number[]) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  const hapticPatterns = {
    light: 50,
    medium: 100,
    heavy: 200,
    pulse: [100, 50, 100, 50, 100],
    burst: [50, 25, 50, 25, 50, 25, 50],
    success: [100, 50, 100],
    error: [200, 100, 200, 100, 200]
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Vibrate className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
          Haptic Feedback
        </h3>
        <div className="ml-auto">
          <span className={`text-xs px-2 py-1 rounded ${
            isSupported 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            {isSupported ? 'Supported' : 'Not Supported'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(hapticPatterns).map(([name, pattern]) => (
          <motion.button
            key={name}
            onClick={() => triggerHaptic(pattern)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!isSupported}
            className={`p-4 rounded-xl font-medium transition-all ${
              isSupported
                ? 'bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
            }`}
          >
            <div className="capitalize">{name}</div>
            <div className="text-xs opacity-75 mt-1">
              {Array.isArray(pattern) ? `${pattern.length} pulses` : `${pattern}ms`}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Gun Club Specific Haptic Examples */}
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900 dark:text-white">Gun Club Haptic Examples:</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.button
            onClick={() => triggerHaptic([150, 50, 150])}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isSupported}
            className="p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Crosshair className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Shot Fired</div>
            <div className="text-xs opacity-75">Double pulse feedback</div>
          </motion.button>

          <motion.button
            onClick={() => triggerHaptic([50, 25, 50, 25, 50, 25, 50])}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isSupported}
            className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Target className="h-6 w-6 mx-auto mb-2" />
                            <div className="font-medium">Clay Break</div>
            <div className="text-xs opacity-75">Celebration burst</div>
          </motion.button>

          <motion.button
            onClick={() => triggerHaptic([300])}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isSupported}
            className="p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Timer className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Time Warning</div>
            <div className="text-xs opacity-75">Long pulse alert</div>
          </motion.button>

          <motion.button
            onClick={() => triggerHaptic([100, 100, 100, 100, 100])}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isSupported}
            className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Zap className="h-6 w-6 mx-auto mb-2" />
            <div className="font-medium">Reload Ready</div>
            <div className="text-xs opacity-75">Rhythmic pulse</div>
          </motion.button>
        </div>
      </div>

      {!isSupported && (
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
          <div className="text-amber-800 dark:text-amber-300 text-sm">
            <strong>Note:</strong> Haptic feedback requires a mobile device with vibration support. 
            This feature works best on smartphones and tablets.
          </div>
        </div>
      )}
    </div>
  );
};

const MultiTouchDemo = () => {
  const [touches, setTouches] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const newTouches = Array.from(e.touches).map((touch, index) => ({
      id: touch.identifier,
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    }));
    
    setTouches(newTouches);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const updatedTouches = Array.from(e.touches).map((touch) => ({
      id: touch.identifier,
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    }));
    
    setTouches(updatedTouches);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    const remainingTouches = Array.from(e.touches).map((touch) => ({
      id: touch.identifier,
      x: touch.clientX,
      y: touch.clientY
    }));
    
    setTouches(remainingTouches);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <Fingerprint className="h-6 w-6 text-[var(--accent-primary)]" />
        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
          Multi-Touch Detection
        </h3>
        <div className="ml-auto text-sm text-slate-500 dark:text-slate-400">
          {touches.length} touch{touches.length !== 1 ? 'es' : ''}
        </div>
      </div>

      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-500 overflow-hidden touch-none"
      >
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400">
          <div className="text-center">
            <Smartphone className="h-8 w-8 mx-auto mb-2" />
            <div className="font-medium">Touch here with multiple fingers</div>
            <div className="text-sm">Best experienced on mobile devices</div>
          </div>
        </div>

        {/* Touch Points */}
        {touches.map((touch, index) => (
          <motion.div
            key={touch.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              position: 'absolute',
              left: touch.x - 20,
              top: touch.y - 20,
              width: 40,
              height: 40
            }}
            className="bg-[var(--accent-primary)] rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white shadow-lg"
          >
            {index + 1}
          </motion.div>
        ))}

        {/* Connection Lines */}
        {touches.length > 1 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {touches.slice(1).map((touch, index) => (
              <motion.line
                key={`line-${index}`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                x1={touches[0].x}
                y1={touches[0].y}
                x2={touch.x}
                y2={touch.y}
                stroke="var(--accent-secondary)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.7"
              />
            ))}
          </svg>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="font-medium text-slate-900 dark:text-white">Touch Points</div>
          <div className="text-slate-600 dark:text-slate-400">Up to 10 simultaneous</div>
        </div>
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="font-medium text-slate-900 dark:text-white">Gestures</div>
          <div className="text-slate-600 dark:text-slate-400">Pinch, rotate, swipe</div>
        </div>
        <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
          <div className="font-medium text-slate-900 dark:text-white">Precision</div>
          <div className="text-slate-600 dark:text-slate-400">Sub-pixel accuracy</div>
        </div>
      </div>
    </div>
  );
};

export default function GesturesPlayground() {
  const [selectedDemo, setSelectedDemo] = useState('swipe');

  const demos = [
    { id: 'swipe', label: 'Swipe Gestures', icon: Hand },
    { id: 'pinch', label: 'Pinch to Zoom', icon: ZoomIn },
    { id: 'voice', label: 'Voice Control', icon: Mic },
    { id: 'haptic', label: 'Haptic Feedback', icon: Vibrate },
    { id: 'multitouch', label: 'Multi-Touch', icon: Fingerprint }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Gamepad2 className="h-12 w-12 text-[var(--accent-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              GESTURE CONTROLS ARSENAL
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced gesture recognition, multi-touch interactions, haptic feedback, 
              and voice commands for next-generation user interfaces.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Demo Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {demos.map((demo) => {
              const IconComponent = demo.icon;
              return (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDemo === demo.id
                      ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {demo.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Content */}
        <motion.div
          key={selectedDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {selectedDemo === 'swipe' && <SwipeGestureDemo />}
          {selectedDemo === 'pinch' && <PinchZoomDemo />}
          {selectedDemo === 'voice' && <VoiceControlDemo />}
          {selectedDemo === 'haptic' && <HapticFeedbackDemo />}
          {selectedDemo === 'multitouch' && <MultiTouchDemo />}
        </motion.div>

        {/* Implementation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700"
        >
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">
            Gesture Control Implementation Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Supported Platforms
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Mobile Devices</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">iOS Safari, Android Chrome</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Desktop</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Touch screens, trackpads</div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="font-medium text-slate-900 dark:text-white">Voice APIs</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Web Speech API support</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Technical Features
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Multi-touch gesture recognition
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Haptic feedback integration
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Voice command processing
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Gesture velocity detection
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Real-time feedback systems
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 