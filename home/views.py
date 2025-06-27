from django.shortcuts import render, get_object_or_404
from .models import User
from . import forms
from django.shortcuts import redirect
from .forms import CreateUser
from django.db.models import Q

def index(request):
    query = request.GET.get('q', '')  # Get search query from GET params
    if query:
        users = User.objects.filter(
            Q(fullname__icontains=query) |
            Q(username__icontains=query) |
            Q(email__icontains=query)
        )
    else:
        users = User.objects.all()
    return render(request, 'task.html', {'users': users, 'query': query})


def index(request):
    users = User.objects.all() 
    return render(request, 'task.html', {'users': users})

def add(request):
    if request.method == 'POST':
        form = CreateUser(request.POST)
        if form.is_valid():
            form.save()  
            return redirect('home:home')  
    else:
        form = CreateUser()

    return render(request, 'task.html', {'form': form, 'user': User.objects.all()})

def delete_user(request, user_id):
    user = get_object_or_404(User, id=user_id) 
    if request.method == 'POST':
        user.delete()  
        return redirect('home:home') 
  
def update_user(request, user_id):
    user = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        form = CreateUser(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('home:home')
    else:
        form = CreateUser(instance=user)
    
    return render(request, 'task.html', {'form': form, 'users': User.objects.all()})
 

