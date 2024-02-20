<?php

$config = new PhpCsFixer\Config();

return $config
    ->setRules([
        '@PSR12'                  => true,
        'new_with_braces'         => false,
        'align_multiline_comment' => false,
        'binary_operator_spaces'  => [
            'default' => 'align_single_space_minimal',
        ],
        'blank_line_after_namespace'   => true,
        'blank_line_after_opening_tag' => false,
        'braces'                       => [
            'allow_single_line_closure'                   => false,
            'position_after_anonymous_constructs'         => 'same',
            'position_after_control_structures'           => 'same',
            'position_after_functions_and_oop_constructs' => 'next',
        ],
        'cast_spaces'                          => true,
        'no_unused_imports'                    => true,
        'combine_consecutive_issets'           => false,
        'combine_consecutive_unsets'           => false,
        'combine_nested_dirname'               => false,
        'comment_to_phpdoc'                    => false,
        'compact_nullable_typehint'            => false,
        'constant_case'                        => ['case' => 'lower'],
        'date_time_immutable'                  => false,
        'declare_equal_normalize'              => ['space' => 'single'],
        'declare_strict_types'                 => false,
        'dir_constant'                         => false,
        'doctrine_annotation_array_assignment' => false,
        'doctrine_annotation_braces'           => false,
        'doctrine_annotation_indentation'      => [
            'ignored_tags'       => [],
            'indent_mixed_lines' => true,
        ],
        'doctrine_annotation_spaces' => [
            'after_argument_assignments'     => false,
            'after_array_assignments_colon'  => false,
            'after_array_assignments_equals' => false,
        ],
        'elseif'   => true,
        'encoding' => true,
        // 'indentantion_type'                           => true,
        'no_useless_else'                             => true,
        'no_useless_return'                           => true,
        'ordered_imports'                             => true,
        'ternary_operator_spaces'                     => true,
        'no_extra_blank_lines'                        => true,
        'no_multiline_whitespace_around_double_arrow' => true,
        'no_singleline_whitespace_before_semicolons'  => true,
        'no_spaces_around_offset'                     => true,
        'ternary_to_null_coalescing'                  => true,
        'whitespace_after_comma_in_array'             => true,
        'trim_array_spaces'                           => true,
        'unary_operator_spaces'                       => true,
        'blank_line_before_statement'                 => true,
        'function_typehint_space'                     => true,
        'include'                                     => true,
        'lowercase_cast'                              => true,
        'no_whitespace_before_comma_in_array'         => true,
        'no_whitespace_in_blank_line'                 => true,
        'object_operator_without_whitespace'          => true,
        // 'single_blank_line_before_namespace'          => true,
        'trailing_comma_in_multiline'                 => true,
        'single_trait_insert_per_statement'           => false,
        'array_syntax'                                => ['syntax' => 'short'],
        'concat_space'                                => ['spacing' => 'one'],
        'multiline_whitespace_before_semicolons'      => false,
        'single_quote'                                => true,
        'array_indentation'                           => true,

    ])
    ->setLineEnding("\n");