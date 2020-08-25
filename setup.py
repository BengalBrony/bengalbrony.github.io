from setuptools import find_packages, setup
import numpy as np
setup(
    name='test_py_lib',
    packages=find_packages(include=['test_py_lib']),
    version='0.1.0',
    description='My first Python library',
    author='Me',
    license='MIT',
    install_requires=[],
    setup_requires=['pytest-runner'],
    tests_require=['pytest==4.4.1'],
    test_suite='tests',
)