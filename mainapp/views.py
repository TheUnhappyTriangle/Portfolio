import os
import json
from django.shortcuts import render
from django.http import Http404

def home(request):
    json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'assets', 'json', 'HomePage.json')

    with open(json_path) as f:
        homepage_content_json = json.load(f)

    homepage_content = {
        'section_intro': homepage_content_json[0]['section_intro'],
        'section_one': homepage_content_json[1]['section_one'],
        'section_two': homepage_content_json[2]['section_two'],
        'section_three': homepage_content_json[3]['section_three']
    }
    
    return render(request, 'index.html', {'homepage_content': homepage_content})

def project(request, Category, urlName):
    json_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'assets', 'json', 'PageContent.json')
    
    with open(json_path) as f:
        page_content_json = json.load(f)

    page_content = None
    for project in page_content_json:
        if project['urlName'] == urlName:
            page_content = project
            break

    if page_content is None:
        raise Http404('That project was not found.')
    
    return render(request, 'project.html', {'page_content': page_content})



