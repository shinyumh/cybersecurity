while True:
    if len(password) < 7:
        print('weak! password should be between 7 - 20')
        password = input('please enter your password again: ')
        continue
    else:
        break
