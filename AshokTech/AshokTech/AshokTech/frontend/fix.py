import re

with open('src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace image with video
img_pattern = r'<img\s+src=\{h2\}\s+alt="Digital Solutions Showcase"\s+className="[^"]+"\s+/>'
video_str = '''<video
                  src="/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />'''
content = re.sub(img_pattern, video_str, content)

# Color replacements
content = re.sub(r'bg-violet-600/(\d+)', r'bg-brand-blue/\1', content)
content = re.sub(r'bg-cyan-500/(\d+)', r'bg-brand-cyan/\1', content)
content = re.sub(r'from-violet-\d+', r'from-brand-blue', content)
content = re.sub(r'to-fuchsia-\d+', r'to-brand-cyan', content)
content = re.sub(r'to-cyan-\d+', r'to-brand-cyan', content)
content = re.sub(r'via-purple-\d+', r'via-brand-blue', content)
content = re.sub(r'via-cyan-\d+', r'via-brand-cyan', content)
content = re.sub(r'via-indigo-\d+', r'via-brand-cyan', content)
content = re.sub(r'via-fuchsia-\d+/\d+', r'via-brand-cyan/15', content)
content = re.sub(r'from-violet-\d+/\d+', r'from-brand-blue/20', content)
content = re.sub(r'to-cyan-\d+/\d+', r'to-brand-cyan/20', content)
content = re.sub(r'text-violet-\d+', r'text-brand-blue', content)
content = re.sub(r'shadow-violet-\d+/\d+', r'shadow-brand-blue/20', content)

with open('src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
