import os

files = [
    "topic_8/test8.html",
    "topic_7/test7.html",
    "topic_14/test14.html",
    "topic_16/test16.html",
    "topic_15/test15.html",
    "topic_13/test13.html",
    "topic_11/test11.html",
    "topic_12/test12.html",
    "topic_10/test10.html",
    "topic2/test2.html",
    "topic4/test4.html",
    "topic-3/test3.html",
    "test_6/test6.html"
]

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        content = content.replace('âœ ï¸', '📝')
        content = content.replace('â ±', '⏱')
        content = content.replace('â†', '←')
        content = content.replace('ðŸ  ', '🏁')
        content = content.replace('🏁  ', '🏁 ')
        
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Fixed {f}")
    else:
        print(f"Not found {f}")
